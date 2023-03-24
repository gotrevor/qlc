import type { ProvisionHostInput } from "graphql-global-types";

export type SimpleProvision_provisionHost_host = {
  readonly id: string;
};

export type SimpleProvision_provisionHost = {
  readonly host: SimpleProvision_provisionHost_host;
};

export type SimpleProvision = {
  /**
   * Null return means it failed
   */
  readonly provisionHost: SimpleProvision_provisionHost | null;
};

export type SimpleProvisionVariables = {
  input: ProvisionHostInput;
};
