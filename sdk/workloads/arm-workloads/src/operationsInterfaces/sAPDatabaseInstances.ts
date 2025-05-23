/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  SAPDatabaseInstance,
  SAPDatabaseInstancesListOptionalParams,
  SAPDatabaseInstancesGetOptionalParams,
  SAPDatabaseInstancesGetResponse,
  SAPDatabaseInstancesCreateOptionalParams,
  SAPDatabaseInstancesCreateResponse,
  SAPDatabaseInstancesUpdateOptionalParams,
  SAPDatabaseInstancesUpdateResponse,
  SAPDatabaseInstancesDeleteOptionalParams,
  SAPDatabaseInstancesDeleteResponse,
  SAPDatabaseInstancesStartInstanceOptionalParams,
  SAPDatabaseInstancesStartInstanceResponse,
  SAPDatabaseInstancesStopInstanceOptionalParams,
  SAPDatabaseInstancesStopInstanceResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a SAPDatabaseInstances. */
export interface SAPDatabaseInstances {
  /**
   * Lists the Database resources associated with a Virtual Instance for SAP solutions resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapVirtualInstanceName The name of the Virtual Instances for SAP solutions resource
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    options?: SAPDatabaseInstancesListOptionalParams
  ): PagedAsyncIterableIterator<SAPDatabaseInstance>;
  /**
   * Gets the SAP Database Instance resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapVirtualInstanceName The name of the Virtual Instances for SAP solutions resource
   * @param databaseInstanceName Database resource name string modeled as parameter for auto generation
   *                             to work correctly.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    databaseInstanceName: string,
    options?: SAPDatabaseInstancesGetOptionalParams
  ): Promise<SAPDatabaseInstancesGetResponse>;
  /**
   * Creates the Database resource corresponding to the Virtual Instance for SAP solutions resource.
   * <br><br>This will be used by service only. PUT by end user will return a Bad Request error.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapVirtualInstanceName The name of the Virtual Instances for SAP solutions resource
   * @param databaseInstanceName Database resource name string modeled as parameter for auto generation
   *                             to work correctly.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    databaseInstanceName: string,
    options?: SAPDatabaseInstancesCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<SAPDatabaseInstancesCreateResponse>,
      SAPDatabaseInstancesCreateResponse
    >
  >;
  /**
   * Creates the Database resource corresponding to the Virtual Instance for SAP solutions resource.
   * <br><br>This will be used by service only. PUT by end user will return a Bad Request error.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapVirtualInstanceName The name of the Virtual Instances for SAP solutions resource
   * @param databaseInstanceName Database resource name string modeled as parameter for auto generation
   *                             to work correctly.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    databaseInstanceName: string,
    options?: SAPDatabaseInstancesCreateOptionalParams
  ): Promise<SAPDatabaseInstancesCreateResponse>;
  /**
   * Updates the Database resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapVirtualInstanceName The name of the Virtual Instances for SAP solutions resource
   * @param databaseInstanceName Database resource name string modeled as parameter for auto generation
   *                             to work correctly.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    databaseInstanceName: string,
    options?: SAPDatabaseInstancesUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<SAPDatabaseInstancesUpdateResponse>,
      SAPDatabaseInstancesUpdateResponse
    >
  >;
  /**
   * Updates the Database resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapVirtualInstanceName The name of the Virtual Instances for SAP solutions resource
   * @param databaseInstanceName Database resource name string modeled as parameter for auto generation
   *                             to work correctly.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    databaseInstanceName: string,
    options?: SAPDatabaseInstancesUpdateOptionalParams
  ): Promise<SAPDatabaseInstancesUpdateResponse>;
  /**
   * Deletes the Database resource corresponding to a Virtual Instance for SAP solutions resource.
   * <br><br>This will be used by service only. Delete by end user will return a Bad Request error.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapVirtualInstanceName The name of the Virtual Instances for SAP solutions resource
   * @param databaseInstanceName Database resource name string modeled as parameter for auto generation
   *                             to work correctly.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    databaseInstanceName: string,
    options?: SAPDatabaseInstancesDeleteOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<SAPDatabaseInstancesDeleteResponse>,
      SAPDatabaseInstancesDeleteResponse
    >
  >;
  /**
   * Deletes the Database resource corresponding to a Virtual Instance for SAP solutions resource.
   * <br><br>This will be used by service only. Delete by end user will return a Bad Request error.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapVirtualInstanceName The name of the Virtual Instances for SAP solutions resource
   * @param databaseInstanceName Database resource name string modeled as parameter for auto generation
   *                             to work correctly.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    databaseInstanceName: string,
    options?: SAPDatabaseInstancesDeleteOptionalParams
  ): Promise<SAPDatabaseInstancesDeleteResponse>;
  /**
   * Starts the database instance of the SAP system.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapVirtualInstanceName The name of the Virtual Instances for SAP solutions resource
   * @param databaseInstanceName Database resource name string modeled as parameter for auto generation
   *                             to work correctly.
   * @param options The options parameters.
   */
  beginStartInstance(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    databaseInstanceName: string,
    options?: SAPDatabaseInstancesStartInstanceOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<SAPDatabaseInstancesStartInstanceResponse>,
      SAPDatabaseInstancesStartInstanceResponse
    >
  >;
  /**
   * Starts the database instance of the SAP system.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapVirtualInstanceName The name of the Virtual Instances for SAP solutions resource
   * @param databaseInstanceName Database resource name string modeled as parameter for auto generation
   *                             to work correctly.
   * @param options The options parameters.
   */
  beginStartInstanceAndWait(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    databaseInstanceName: string,
    options?: SAPDatabaseInstancesStartInstanceOptionalParams
  ): Promise<SAPDatabaseInstancesStartInstanceResponse>;
  /**
   * Stops the database instance of the SAP system.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapVirtualInstanceName The name of the Virtual Instances for SAP solutions resource
   * @param databaseInstanceName Database resource name string modeled as parameter for auto generation
   *                             to work correctly.
   * @param options The options parameters.
   */
  beginStopInstance(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    databaseInstanceName: string,
    options?: SAPDatabaseInstancesStopInstanceOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<SAPDatabaseInstancesStopInstanceResponse>,
      SAPDatabaseInstancesStopInstanceResponse
    >
  >;
  /**
   * Stops the database instance of the SAP system.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sapVirtualInstanceName The name of the Virtual Instances for SAP solutions resource
   * @param databaseInstanceName Database resource name string modeled as parameter for auto generation
   *                             to work correctly.
   * @param options The options parameters.
   */
  beginStopInstanceAndWait(
    resourceGroupName: string,
    sapVirtualInstanceName: string,
    databaseInstanceName: string,
    options?: SAPDatabaseInstancesStopInstanceOptionalParams
  ): Promise<SAPDatabaseInstancesStopInstanceResponse>;
}
