/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { AppComplianceAutomationToolForMicrosoft365 } from "@azure/arm-appcomplianceautomation";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Download evidence file.
 *
 * @summary Download evidence file.
 * x-ms-original-file: specification/appcomplianceautomation/resource-manager/Microsoft.AppComplianceAutomation/stable/2024-06-27/examples/Evidence_Download.json
 */
async function evidenceDownload(): Promise<void> {
  const reportName = "testReportName";
  const evidenceName = "evidence1";
  const credential = new DefaultAzureCredential();
  const client = new AppComplianceAutomationToolForMicrosoft365(credential);
  const result = await client.evidence.download(reportName, evidenceName, {
    offerGuid: "00000000-0000-0000-0000-000000000000",
    reportCreatorTenantId: "00000000-0000-0000-0000-000000000000",
  });
  console.log(result);
}

async function main(): Promise<void> {
  await evidenceDownload();
}

main().catch(console.error);
