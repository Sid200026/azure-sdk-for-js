/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  CosmosDbDataConnection,
  EventGridDataConnection,
  EventHubDataConnection,
  KustoManagementClient
} from "@azure/arm-kusto";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Updates a data connection.
 *
 * @summary Updates a data connection.
 * x-ms-original-file: specification/azure-kusto/resource-manager/Microsoft.Kusto/stable/2023-05-02/examples/KustoDataConnectionsCosmosDbUpdate.json
 */
async function kustoDataConnectionsCosmosDbUpdate() {
  const subscriptionId =
    process.env["KUSTO_SUBSCRIPTION_ID"] ||
    "12345678-1234-1234-1234-123456789098";
  const resourceGroupName =
    process.env["KUSTO_RESOURCE_GROUP"] || "kustorptest";
  const clusterName = "kustoCluster";
  const databaseName = "KustoDatabase1";
  const dataConnectionName = "dataConnectionTest";
  const parameters: CosmosDbDataConnection = {
    cosmosDbAccountResourceId:
      "/subscriptions/12345678-1234-1234-1234-123456789098/resourceGroups/kustorptest/providers/Microsoft.DocumentDb/databaseAccounts/cosmosDbAccountTest1",
    cosmosDbContainer: "cosmosDbContainerTest",
    cosmosDbDatabase: "cosmosDbDatabaseTest",
    kind: "CosmosDb",
    location: "westus",
    managedIdentityResourceId:
      "/subscriptions/12345678-1234-1234-1234-123456789098/resourceGroups/kustorptest/providers/Microsoft.ManagedIdentity/userAssignedIdentities/managedidentityTest1",
    mappingRuleName: "TestMapping",
    retrievalStartDate: new Date("2022-07-29T12:00:00.6554616Z"),
    tableName: "TestTable"
  };
  const credential = new DefaultAzureCredential();
  const client = new KustoManagementClient(credential, subscriptionId);
  const result = await client.dataConnections.beginUpdateAndWait(
    resourceGroupName,
    clusterName,
    databaseName,
    dataConnectionName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Updates a data connection.
 *
 * @summary Updates a data connection.
 * x-ms-original-file: specification/azure-kusto/resource-manager/Microsoft.Kusto/stable/2023-05-02/examples/KustoDataConnectionsEventGridUpdate.json
 */
async function kustoDataConnectionsEventGridUpdate() {
  const subscriptionId =
    process.env["KUSTO_SUBSCRIPTION_ID"] ||
    "12345678-1234-1234-1234-123456789098";
  const resourceGroupName =
    process.env["KUSTO_RESOURCE_GROUP"] || "kustorptest";
  const clusterName = "kustoCluster";
  const databaseName = "KustoDatabase8";
  const dataConnectionName = "dataConnectionTest";
  const parameters: EventGridDataConnection = {
    blobStorageEventType: "Microsoft.Storage.BlobCreated",
    consumerGroup: "$Default",
    dataFormat: "JSON",
    databaseRouting: "Single",
    eventGridResourceId:
      "/subscriptions/12345678-1234-1234-1234-123456789098/resourceGroups/kustorptest/providers/Microsoft.Storage/storageAccounts/teststorageaccount/providers/Microsoft.EventGrid/eventSubscriptions/eventSubscriptionTest",
    eventHubResourceId:
      "/subscriptions/12345678-1234-1234-1234-123456789098/resourceGroups/kustorptest/providers/Microsoft.EventHub/namespaces/eventhubTestns1/eventhubs/eventhubTest2",
    ignoreFirstRecord: false,
    kind: "EventGrid",
    location: "westus",
    managedIdentityResourceId:
      "/subscriptions/12345678-1234-1234-1234-123456789098/resourceGroups/kustorptest/providers/Microsoft.ManagedIdentity/userAssignedIdentities/managedidentityTest1",
    mappingRuleName: "TestMapping",
    storageAccountResourceId:
      "/subscriptions/12345678-1234-1234-1234-123456789098/resourceGroups/kustorptest/providers/Microsoft.Storage/storageAccounts/teststorageaccount",
    tableName: "TestTable"
  };
  const credential = new DefaultAzureCredential();
  const client = new KustoManagementClient(credential, subscriptionId);
  const result = await client.dataConnections.beginUpdateAndWait(
    resourceGroupName,
    clusterName,
    databaseName,
    dataConnectionName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Updates a data connection.
 *
 * @summary Updates a data connection.
 * x-ms-original-file: specification/azure-kusto/resource-manager/Microsoft.Kusto/stable/2023-05-02/examples/KustoDataConnectionsUpdate.json
 */
async function kustoDataConnectionsUpdate() {
  const subscriptionId =
    process.env["KUSTO_SUBSCRIPTION_ID"] ||
    "12345678-1234-1234-1234-123456789098";
  const resourceGroupName =
    process.env["KUSTO_RESOURCE_GROUP"] || "kustorptest";
  const clusterName = "kustoCluster";
  const databaseName = "KustoDatabase8";
  const dataConnectionName = "dataConnectionTest";
  const parameters: EventHubDataConnection = {
    consumerGroup: "testConsumerGroup1",
    eventHubResourceId:
      "/subscriptions/12345678-1234-1234-1234-123456789098/resourceGroups/kustorptest/providers/Microsoft.EventHub/namespaces/eventhubTestns1/eventhubs/eventhubTest1",
    kind: "EventHub",
    location: "westus",
    managedIdentityResourceId:
      "/subscriptions/12345678-1234-1234-1234-123456789098/resourceGroups/kustorptest/providers/Microsoft.ManagedIdentity/userAssignedIdentities/managedidentityTest1"
  };
  const credential = new DefaultAzureCredential();
  const client = new KustoManagementClient(credential, subscriptionId);
  const result = await client.dataConnections.beginUpdateAndWait(
    resourceGroupName,
    clusterName,
    databaseName,
    dataConnectionName,
    parameters
  );
  console.log(result);
}

async function main() {
  kustoDataConnectionsCosmosDbUpdate();
  kustoDataConnectionsEventGridUpdate();
  kustoDataConnectionsUpdate();
}

main().catch(console.error);