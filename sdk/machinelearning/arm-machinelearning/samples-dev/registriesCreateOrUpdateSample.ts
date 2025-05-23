/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { Registry } from "@azure/arm-machinelearning";
import { AzureMachineLearningServicesManagementClient } from "@azure/arm-machinelearning";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create or update registry
 *
 * @summary Create or update registry
 * x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2024-04-01/examples/Registries/createOrUpdate-SystemCreated.json
 */
async function createOrUpdateRegistryWithSystemCreatedAccounts(): Promise<void> {
  const subscriptionId =
    process.env["MACHINELEARNING_SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["MACHINELEARNING_RESOURCE_GROUP"] || "test-rg";
  const registryName = "string";
  const body: Registry = {
    discoveryUrl: "string",
    identity: { type: "None", userAssignedIdentities: { string: {} } },
    intellectualPropertyPublisher: "string",
    kind: "string",
    location: "string",
    managedResourceGroup: { resourceId: "string" },
    mlFlowRegistryUri: "string",
    publicNetworkAccess: "string",
    regionDetails: [
      {
        acrDetails: [
          {
            systemCreatedAcrAccount: {
              acrAccountName: "string",
              acrAccountSku: "string",
              armResourceId: { resourceId: "string" },
            },
          },
        ],
        location: "string",
        storageAccountDetails: [
          {
            systemCreatedStorageAccount: {
              allowBlobPublicAccess: false,
              armResourceId: { resourceId: "string" },
              storageAccountHnsEnabled: false,
              storageAccountName: "string",
              storageAccountType: "string",
            },
          },
        ],
      },
    ],
    registryPrivateEndpointConnections: [
      {
        groupIds: ["string"],
        id: "string",
        location: "string",
        privateEndpoint: { subnetArmId: "string" },
        provisioningState: "string",
        registryPrivateLinkServiceConnectionState: {
          description: "string",
          actionsRequired: "string",
          status: "Approved",
        },
      },
    ],
    sku: {
      name: "string",
      capacity: 1,
      family: "string",
      size: "string",
      tier: "Free",
    },
    tags: {},
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMachineLearningServicesManagementClient(credential, subscriptionId);
  const result = await client.registries.beginCreateOrUpdateAndWait(
    resourceGroupName,
    registryName,
    body,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update registry
 *
 * @summary Create or update registry
 * x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2024-04-01/examples/Registries/createOrUpdate-UserCreated.json
 */
async function createOrUpdateRegistryWithUserCreatedAccounts(): Promise<void> {
  const subscriptionId =
    process.env["MACHINELEARNING_SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["MACHINELEARNING_RESOURCE_GROUP"] || "test-rg";
  const registryName = "string";
  const body: Registry = {
    discoveryUrl: "string",
    identity: { type: "None", userAssignedIdentities: { string: {} } },
    intellectualPropertyPublisher: "string",
    kind: "string",
    location: "string",
    managedResourceGroup: { resourceId: "string" },
    mlFlowRegistryUri: "string",
    publicNetworkAccess: "string",
    regionDetails: [
      {
        acrDetails: [
          {
            userCreatedAcrAccount: { armResourceId: { resourceId: "string" } },
          },
        ],
        location: "string",
        storageAccountDetails: [
          {
            userCreatedStorageAccount: {
              armResourceId: { resourceId: "string" },
            },
          },
        ],
      },
    ],
    registryPrivateEndpointConnections: [
      {
        groupIds: ["string"],
        id: "string",
        location: "string",
        privateEndpoint: { subnetArmId: "string" },
        provisioningState: "string",
        registryPrivateLinkServiceConnectionState: {
          description: "string",
          actionsRequired: "string",
          status: "Approved",
        },
      },
    ],
    sku: {
      name: "string",
      capacity: 1,
      family: "string",
      size: "string",
      tier: "Free",
    },
    tags: {},
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMachineLearningServicesManagementClient(credential, subscriptionId);
  const result = await client.registries.beginCreateOrUpdateAndWait(
    resourceGroupName,
    registryName,
    body,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createOrUpdateRegistryWithSystemCreatedAccounts();
  await createOrUpdateRegistryWithUserCreatedAccounts();
}

main().catch(console.error);
