import type { ClientOptions } from "./client-options.js";
import { ApiError } from "./core/api-error.js";
import type { ApiPromise } from "./core/api-promise.js";
import type { RequestOptions } from "./core/api-request.js";
import { noneAuth } from "./core/auth/schemes.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { operationTypeSchema, type OperationType } from "./models/operation-type.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Simple calculator API hosted on APIMATIC
 */
export class ApimaticCalculatorClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "APIMATIC_CALCULATOR_CLIENT_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "ApimaticCalculatorClient/2.3.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "2.3.0", schema: s.string() },
        { name: "X-APIMatic-Gen-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-OS", value: host.operatingSystem(), schema: s.optional(s.string()) },
        { name: "X-APIMatic-Runtime", value: host.runtimeDescription(), schema: s.optional(s.string()) },
      ],
      defaultQuery: [],
      defaultPathParams: [],
    });

    this.#servers = buildServers(options);
  }

  /**
   * Calculate
   *
   * @remarks
   * Calculates the expression using the specified operation.
   *
   * @returns The result of the calculation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ApimaticCalculatorError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  calculate(
    request: ApimaticCalculatorClient.CalculateRequest,
    options?: RequestOptions,
  ): ApiPromise<number, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/{operation}"),
        auth: noneAuth,
        pathParams: [{ name: "operation", value: request.operation, schema: operationTypeSchema }],
        query: [
          { name: "x", value: request.x, schema: s.float64() },
          { name: "y", value: request.y, schema: s.float64() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "text", schema: s.float64() },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace ApimaticCalculatorClient {
  export type CalculateRequest = {
    /** The operator to apply on the variables */
    operation: OperationType;
    /** The LHS value */
    x: number;
    /** The RHS value */
    y: number;
  };
}
