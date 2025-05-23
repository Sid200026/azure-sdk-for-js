/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  IntegrationServiceEnvironmentSkuDefinition,
  IntegrationServiceEnvironmentSkusListOptionalParams
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a IntegrationServiceEnvironmentSkus. */
export interface IntegrationServiceEnvironmentSkus {
  /**
   * Gets a list of integration service environment Skus.
   * @param resourceGroup The resource group.
   * @param integrationServiceEnvironmentName The integration service environment name.
   * @param options The options parameters.
   */
  list(
    resourceGroup: string,
    integrationServiceEnvironmentName: string,
    options?: IntegrationServiceEnvironmentSkusListOptionalParams
  ): PagedAsyncIterableIterator<IntegrationServiceEnvironmentSkuDefinition>;
}
