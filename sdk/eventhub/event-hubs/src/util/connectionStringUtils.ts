// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { parseConnectionString } from "@azure/core-amqp";

/**
 * The set of properties that comprise an Event Hub connection string.
 */
export interface EventHubConnectionStringProperties {
  /**
   * The fully qualified Event Hub namespace extracted from the "Endpoint" in the
   * connection string. This is likely to be similar to `{yournamespace}.servicebus.windows.net`.
   * This is typically used to construct an EventHubProducerClient or an EventHubConsumerClient.
   */
  fullyQualifiedNamespace: string;
  /**
   * The value for "Endpoint" in the connection string.
   */
  endpoint: string;
  /**
   * The value for "EntityPath" in the connection string which would be the name of the event hub instance associated with the connection string.
   * Connection string from a Shared Access Policy created at the namespace level
   * will not have the EntityPath in it.
   */
  eventHubName?: string;
  /**
   * The value for "SharedAccessKey" in the connection string. This along with the "SharedAccessKeyName"
   * in the connection string is used to generate a SharedAccessSignature which can be used authorize
   * the connection to the service.
   */
  sharedAccessKey?: string;
  /**
   * The value for "SharedAccessKeyName" in the connection string. This along with the "SharedAccessKey"
   * in the connection string is used to generate a SharedAccessSignature which can be used authorize
   * the connection to the service.
   */
  sharedAccessKeyName?: string;
  /**
   * The value for "SharedAccessSignature" in the connection string. This is typically not present in the
   * connection string generated for a Shared Access Policy. It is instead generated by the
   * user and appended to the connection string for ease of use.
   */
  sharedAccessSignature?: string;
  /**
   * This should be true only if the connection string contains the slug ";UseDevelopmentEmulator=true"
   * and the endpoint is a loopback address.
   */
  useDevelopmentEmulator?: boolean;
}

/**
 * Parses given connection string into the different properties applicable to Azure Event Hubs.
 * The properties are useful to then construct an EventHubProducerClient or an EventHubConsumerClient.
 * @param connectionString - The connection string associated with the Shared Access Policy created
 * for the Event Hubs namespace.
 */
export function parseEventHubConnectionString(
  connectionString: string,
): Readonly<EventHubConnectionStringProperties> {
  const parsedResult = parseConnectionString<{
    Endpoint: string;
    EntityPath?: string;
    SharedAccessSignature?: string;
    SharedAccessKey?: string;
    SharedAccessKeyName?: string;
    UseDevelopmentEmulator?: string;
  }>(connectionString);

  validateProperties(
    parsedResult.Endpoint,
    parsedResult.SharedAccessSignature,
    parsedResult.SharedAccessKey,
    parsedResult.SharedAccessKeyName,
  );

  const output: EventHubConnectionStringProperties = {
    fullyQualifiedNamespace: (parsedResult.Endpoint.match(".*://([^/]*)") || [])[1],
    endpoint: parsedResult.Endpoint,
  };

  if (parsedResult.EntityPath) {
    output.eventHubName = parsedResult.EntityPath;
  }

  if (parsedResult.SharedAccessSignature) {
    output.sharedAccessSignature = parsedResult.SharedAccessSignature;
  }

  if (parsedResult.SharedAccessKey && parsedResult.SharedAccessKeyName) {
    output.sharedAccessKey = parsedResult.SharedAccessKey;
    output.sharedAccessKeyName = parsedResult.SharedAccessKeyName;
  }

  return output;
}

/**
 * @internal
 */
function validateProperties(
  endpoint?: string,
  sharedAccessSignature?: string,
  sharedAccessKey?: string,
  sharedAccessKeyName?: string,
): void {
  if (!endpoint) {
    throw new Error("Connection string should have an Endpoint key.");
  }

  if (sharedAccessSignature) {
    if (sharedAccessKey || sharedAccessKeyName) {
      throw new Error(
        "Connection string cannot have both SharedAccessSignature and SharedAccessKey keys.",
      );
    }
  } else if (sharedAccessKey && !sharedAccessKeyName) {
    throw new Error("Connection string with SharedAccessKey should have SharedAccessKeyName.");
  } else if (!sharedAccessKey && sharedAccessKeyName) {
    throw new Error(
      "Connection string with SharedAccessKeyName should have SharedAccessKey as well.",
    );
  }
}
