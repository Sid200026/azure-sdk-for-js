/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { AutomationClient } from "@azure/arm-automation";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Retrieve the activity in the module identified by module name and activity name.
 *
 * @summary Retrieve the activity in the module identified by module name and activity name.
 * x-ms-original-file: specification/automation/resource-manager/Microsoft.Automation/preview/2020-01-13-preview/examples/getActivityInAModule.json
 */
async function getActivityInAModule(): Promise<void> {
  const subscriptionId = process.env["AUTOMATION_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["AUTOMATION_RESOURCE_GROUP"] || "rg";
  const automationAccountName = "myAutomationAccount33";
  const moduleName = "OmsCompositeResources";
  const activityName = "Add-AzureRmAccount";
  const credential = new DefaultAzureCredential();
  const client = new AutomationClient(credential, subscriptionId);
  const result = await client.activityOperations.get(
    resourceGroupName,
    automationAccountName,
    moduleName,
    activityName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await getActivityInAModule();
}

main().catch(console.error);
