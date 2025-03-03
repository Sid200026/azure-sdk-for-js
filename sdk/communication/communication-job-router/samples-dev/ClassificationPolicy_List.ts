// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary Classification policy crud
 */
import type { ClassificationPolicyItem } from "@azure/communication-job-router";
import { JobRouterAdministrationClient } from "@azure/communication-job-router";

// Load the .env file (you will need to set these environment variables)
import "dotenv/config";

const connectionString = process.env["COMMUNICATION_CONNECTION_STRING"] || "";

// List classification policies
async function listClassificationPolicies(): Promise<void> {
  // Create the Router Client
  const routerAdministrationClient: JobRouterAdministrationClient =
    new JobRouterAdministrationClient(connectionString);

  let pagesCount = 1;
  const maxPageSize = 3;
  const receivedPagedItems: ClassificationPolicyItem[] = [];

  for await (const page of routerAdministrationClient
    .listClassificationPolicies({ maxPageSize })
    .byPage()) {
    ++pagesCount;

    console.log("page: " + pagesCount);
    for (const policy of page) {
      if (policy.classificationPolicy) {
        receivedPagedItems.push(policy);
        console.log("Listing classification policy with id: " + policy.classificationPolicy.id);
      }
    }
  }
}

listClassificationPolicies().catch(console.error);
