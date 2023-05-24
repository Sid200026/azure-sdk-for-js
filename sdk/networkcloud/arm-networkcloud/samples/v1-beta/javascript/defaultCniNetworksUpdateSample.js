/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { NetworkCloud } = require("@azure/arm-networkcloud");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Update tags associated with the provided default CNI network.
 *
 * @summary Update tags associated with the provided default CNI network.
 * x-ms-original-file: specification/networkcloud/resource-manager/Microsoft.NetworkCloud/preview/2022-12-12-preview/examples/DefaultCniNetworks_Patch.json
 */
async function patchDefaultCniNetwork() {
  const subscriptionId = process.env["NETWORKCLOUD_SUBSCRIPTION_ID"] || "subscriptionId";
  const resourceGroupName = process.env["NETWORKCLOUD_RESOURCE_GROUP"] || "resourceGroupName";
  const defaultCniNetworkName = "defaultCniNetworkName";
  const defaultCniNetworkUpdateParameters = {
    tags: { key1: "myvalue1", key2: "myvalue2" },
  };
  const options = {
    defaultCniNetworkUpdateParameters,
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkCloud(credential, subscriptionId);
  const result = await client.defaultCniNetworks.update(
    resourceGroupName,
    defaultCniNetworkName,
    options
  );
  console.log(result);
}

async function main() {
  patchDefaultCniNetwork();
}

main().catch(console.error);