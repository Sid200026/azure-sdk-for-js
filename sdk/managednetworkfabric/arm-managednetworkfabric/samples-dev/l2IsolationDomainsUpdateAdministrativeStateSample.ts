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
  UpdateAdministrativeState,
  AzureNetworkFabricManagementServiceAPI
} from "@azure/arm-managednetworkfabric";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Enables isolation domain across the fabric or on specified racks.
 *
 * @summary Enables isolation domain across the fabric or on specified racks.
 * x-ms-original-file: specification/managednetworkfabric/resource-manager/Microsoft.ManagedNetworkFabric/preview/2023-02-01-preview/examples/L2IsolationDomains_updateAdministrativeState_MaximumSet_Gen.json
 */
async function l2IsolationDomainsUpdateAdministrativeStateMaximumSetGen() {
  const subscriptionId =
    process.env["MANAGEDNETWORKFABRIC_SUBSCRIPTION_ID"] || "subscriptionId";
  const resourceGroupName =
    process.env["MANAGEDNETWORKFABRIC_RESOURCE_GROUP"] || "resourceGroupName";
  const l2IsolationDomainName = "l2IsolationDomainName";
  const body: UpdateAdministrativeState = {
    resourceIds: [
      "/subscriptions/xxxxxx/resourceGroups/resourcegroupname/providers/Microsoft.ManagedNetworkFabric/l2IsolationDomains/example-l2domain"
    ],
    state: "Enable"
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureNetworkFabricManagementServiceAPI(
    credential,
    subscriptionId
  );
  const result = await client.l2IsolationDomains.beginUpdateAdministrativeStateAndWait(
    resourceGroupName,
    l2IsolationDomainName,
    body
  );
  console.log(result);
}

async function main() {
  l2IsolationDomainsUpdateAdministrativeStateMaximumSetGen();
}

main().catch(console.error);