/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { CostManagementClient } from "@azure/arm-costmanagement";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets a URL to download the pricesheet for an invoice. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
 *
 * @summary Gets a URL to download the pricesheet for an invoice. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/PricesheetDownload.json
 */
async function pricesheetDownload(): Promise<void> {
  const billingAccountName =
    "7c05a543-80ff-571e-9f98-1063b3b53cf2:99ad03ad-2d1b-4889-a452-090ad407d25f_2019-05-31";
  const billingProfileName = "2USN-TPCD-BG7-TGB";
  const invoiceName = "T000940677";
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.priceSheet.beginDownloadAndWait(
    billingAccountName,
    billingProfileName,
    invoiceName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await pricesheetDownload();
}

main().catch(console.error);
