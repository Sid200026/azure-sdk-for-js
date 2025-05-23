// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import type { DiagnosticNodeInternal } from "../diagnostics/DiagnosticNodeInternal.js";
import type { RequestContext } from "../request/RequestContext.js";
import type { Response } from "../request/Response.js";

/**
 * Used to specify which type of events to execute this plug in on.
 *
 * @hidden
 */
export enum PluginOn {
  /**
   * Will be executed per network request
   */
  request = "request",
  /**
   * Will be executed per API operation
   */
  operation = "operation",
}

/**
 * Specifies which event to run for the specified plugin
 *
 * @hidden
 */
export interface PluginConfig {
  /**
   * The event to run the plugin on
   */
  on: keyof typeof PluginOn;
  /**
   * The plugin to run
   */
  plugin: Plugin<any>;
}

/**
 * Plugins allow you to customize the behavior of the SDk with additional logging, retry, or additional functionality.
 *
 * A plugin is a function which returns a `Promise<Response<T>>`, and is passed a RequestContext and Next object.
 *
 * Next is a function which takes in requestContext returns a promise. You must await/then that promise which will contain the response from further plugins,
 * allowing you to log those results or handle errors.
 *
 * RequestContext is an object which controls what operation is happening, against which endpoint, and more. Modifying this and passing it along via next is how
 * you modify future SDK behavior.
 *
 * @hidden
 */
export type Plugin<T> = (
  context: RequestContext,
  diagnosticNode: DiagnosticNodeInternal,
  next: Next<T>,
) => Promise<Response<T>>;

/**
 * Next is a function which takes in requestContext returns a promise. You must await/then that promise which will contain the response from further plugins,
 * allowing you to log those results or handle errors.
 * @hidden
 */
export type Next<T> = (context: RequestContext) => Promise<Response<T>>;

/**
 * @internal
 */
export async function executePlugins(
  diagnosticNode: DiagnosticNodeInternal,
  requestContext: RequestContext,
  next: Plugin<any>,
  on: PluginOn,
): Promise<Response<any>> {
  if (!requestContext.plugins) {
    return next(requestContext, diagnosticNode, undefined);
  }
  let level = 0;
  const _: Next<any> = (inner: RequestContext): Promise<Response<any>> => {
    if (++level >= inner.plugins.length) {
      return next(requestContext, diagnosticNode, undefined);
    } else if (inner.plugins[level].on !== on) {
      return _(requestContext);
    } else {
      return inner.plugins[level].plugin(inner, diagnosticNode, _);
    }
  };
  if (requestContext.plugins[level].on !== on) {
    return _(requestContext);
  } else {
    return requestContext.plugins[level].plugin(requestContext, diagnosticNode, _);
  }
}
