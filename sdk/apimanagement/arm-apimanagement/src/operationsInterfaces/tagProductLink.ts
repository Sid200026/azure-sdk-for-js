/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  TagProductLinkContract,
  TagProductLinkListByProductOptionalParams,
  TagProductLinkGetOptionalParams,
  TagProductLinkGetResponse,
  TagProductLinkCreateOrUpdateOptionalParams,
  TagProductLinkCreateOrUpdateResponse,
  TagProductLinkDeleteOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a TagProductLink. */
export interface TagProductLink {
  /**
   * Lists a collection of the product links associated with a tag.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param tagId Tag identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  listByProduct(
    resourceGroupName: string,
    serviceName: string,
    tagId: string,
    options?: TagProductLinkListByProductOptionalParams,
  ): PagedAsyncIterableIterator<TagProductLinkContract>;
  /**
   * Gets the product link for the tag.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param tagId Tag identifier. Must be unique in the current API Management service instance.
   * @param productLinkId Tag-product link identifier. Must be unique in the current API Management
   *                      service instance.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    tagId: string,
    productLinkId: string,
    options?: TagProductLinkGetOptionalParams,
  ): Promise<TagProductLinkGetResponse>;
  /**
   * Adds a product to the specified tag via link.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param tagId Tag identifier. Must be unique in the current API Management service instance.
   * @param productLinkId Tag-product link identifier. Must be unique in the current API Management
   *                      service instance.
   * @param parameters Create or update parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    tagId: string,
    productLinkId: string,
    parameters: TagProductLinkContract,
    options?: TagProductLinkCreateOrUpdateOptionalParams,
  ): Promise<TagProductLinkCreateOrUpdateResponse>;
  /**
   * Deletes the specified product from the specified tag.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param tagId Tag identifier. Must be unique in the current API Management service instance.
   * @param productLinkId Tag-product link identifier. Must be unique in the current API Management
   *                      service instance.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    tagId: string,
    productLinkId: string,
    options?: TagProductLinkDeleteOptionalParams,
  ): Promise<void>;
}
