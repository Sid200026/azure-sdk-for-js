// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * @summary router worker crud
 */
import type { RouterWorkerItem } from "@azure/communication-job-router";
import { JobRouterClient } from "@azure/communication-job-router";

// Load the .env file (you will need to set these environment variables)
import "dotenv/config";

const connectionString = process.env["COMMUNICATION_CONNECTION_STRING"] || "";

// List exception policies
async function listRouterWorkers(): Promise<void> {
  // Create the Router Client
  const routerClient: JobRouterClient = new JobRouterClient(connectionString);

  let pagesCount = 1;
  const maxPageSize = 3;
  const receivedPagedItems: RouterWorkerItem[] = [];

  for await (const page of routerClient.listWorkers({ maxPageSize }).byPage()) {
    ++pagesCount;
    console.log("page: " + pagesCount);
    for (const policy of page) {
      if (policy.worker) {
        receivedPagedItems.push(policy);
        console.log("Listing router worker with id: " + policy.worker.id);
      }
    }
  }
}

listRouterWorkers().catch(console.error);
