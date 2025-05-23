/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { RoleEligibilityScheduleRequest } from "@azure/arm-authorization";
import { AuthorizationManagementClient } from "@azure/arm-authorization";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Validates a new role eligibility schedule request.
 *
 * @summary Validates a new role eligibility schedule request.
 * x-ms-original-file: specification/authorization/resource-manager/Microsoft.Authorization/preview/2022-04-01-preview/examples/ValidateRoleEligibilityScheduleRequestByName.json
 */
async function validateRoleEligibilityScheduleRequestByName(): Promise<void> {
  const scope = "subscriptions/dfa2a084-766f-4003-8ae1-c4aeb893a99f";
  const roleEligibilityScheduleRequestName = "64caffb6-55c0-4deb-a585-68e948ea1ad6";
  const parameters: RoleEligibilityScheduleRequest = {
    condition:
      "@Resource[Microsoft.Storage/storageAccounts/blobServices/containers:ContainerName] StringEqualsIgnoreCase 'foo_storage_container'",
    conditionVersion: "1.0",
    principalId: "a3bb8764-cb92-4276-9d2a-ca1e895e55ea",
    requestType: "AdminAssign",
    roleDefinitionId:
      "/subscriptions/dfa2a084-766f-4003-8ae1-c4aeb893a99f/providers/Microsoft.Authorization/roleDefinitions/c8d4ff99-41c3-41a8-9f60-21dfdad59608",
    scheduleInfo: {
      expiration: {
        type: "AfterDuration",
        duration: "P365D",
        endDateTime: undefined,
      },
      startDateTime: new Date("2020-09-09T21:31:27.91Z"),
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new AuthorizationManagementClient(credential);
  const result = await client.roleEligibilityScheduleRequests.validate(
    scope,
    roleEligibilityScheduleRequestName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await validateRoleEligibilityScheduleRequestByName();
}

main().catch(console.error);
