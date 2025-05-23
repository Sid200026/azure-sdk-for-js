## API Report File for "@azure/arm-neonpostgres"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { Client } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { OperationState } from '@azure/core-lro';
import { PollerLike } from '@azure/core-lro';

// @public
export function $delete(context: PostgresContext, resourceGroupName: string, organizationName: string, projectName: string, branchName: string, computeName: string, options?: ComputesDeleteOptionalParams): Promise<void>;

// @public
export interface ComputesCreateOrUpdateOptionalParams extends OperationOptions {
    updateIntervalInMs?: number;
}

// @public
export interface ComputesDeleteOptionalParams extends OperationOptions {
}

// @public
export interface ComputesGetOptionalParams extends OperationOptions {
}

// @public
export interface ComputesListOptionalParams extends OperationOptions {
}

// @public
export interface ComputesUpdateOptionalParams extends OperationOptions {
    updateIntervalInMs?: number;
}

// @public
export function createOrUpdate(context: PostgresContext, resourceGroupName: string, organizationName: string, projectName: string, branchName: string, computeName: string, resource: Compute, options?: ComputesCreateOrUpdateOptionalParams): PollerLike<OperationState<Compute>, Compute>;

// @public
export function get(context: PostgresContext, resourceGroupName: string, organizationName: string, projectName: string, branchName: string, computeName: string, options?: ComputesGetOptionalParams): Promise<Compute>;

// @public
export function list(context: PostgresContext, resourceGroupName: string, organizationName: string, projectName: string, branchName: string, options?: ComputesListOptionalParams): PagedAsyncIterableIterator<Compute>;

// @public
export function update(context: PostgresContext, resourceGroupName: string, organizationName: string, projectName: string, branchName: string, computeName: string, properties: Compute, options?: ComputesUpdateOptionalParams): PollerLike<OperationState<Compute>, Compute>;

// (No @packageDocumentation comment for this package)

```
