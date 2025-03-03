/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureVMwareSolutionAPI } from "@azure/arm-avs";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Get a HcxEnterpriseSite
 *
 * @summary Get a HcxEnterpriseSite
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2023-09-01/examples/HcxEnterpriseSites_Get.json
 */
async function hcxEnterpriseSitesGet(): Promise<void> {
  const subscriptionId =
    process.env["AVS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["AVS_RESOURCE_GROUP"] || "group1";
  const privateCloudName = "cloud1";
  const hcxEnterpriseSiteName = "site1";
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.hcxEnterpriseSites.get(
    resourceGroupName,
    privateCloudName,
    hcxEnterpriseSiteName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  hcxEnterpriseSitesGet();
}

main().catch(console.error);
