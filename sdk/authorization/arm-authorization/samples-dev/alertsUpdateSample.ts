/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { Alert, AuthorizationManagementClient } from "@azure/arm-authorization";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Update an alert.
 *
 * @summary Update an alert.
 * x-ms-original-file: specification/authorization/resource-manager/Microsoft.Authorization/preview/2022-08-01-preview/examples/UpdateAlert.json
 */
async function deactivateAlert(): Promise<void> {
  const scope = "subscriptions/afa2a084-766f-4003-8ae1-c4aeb893a99f";
  const alertId = "TooManyPermanentOwnersAssignedToResource";
  const parameters: Alert = { isActive: false };
  const credential = new DefaultAzureCredential();
  const client = new AuthorizationManagementClient(credential);
  const result = await client.alerts.update(scope, alertId, parameters);
  console.log(result);
}

async function main(): Promise<void> {
  deactivateAlert();
}

main().catch(console.error);
