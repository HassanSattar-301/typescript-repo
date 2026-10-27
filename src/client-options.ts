import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions;

type ServerOptions = {
  /** This environment connect to the LIVE calculator API */
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
