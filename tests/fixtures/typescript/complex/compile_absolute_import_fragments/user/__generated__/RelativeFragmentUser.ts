import type { OperatingSystem } from "graphql-global-types";

export type RelativeFragmentUser_personalHost = {
  readonly osFromAbsolute: OperatingSystem;
  readonly personalHostIdFromRelative: string;
};

export type RelativeFragmentUser = {
  readonly email: string;
  readonly lastNameFromRelative: string;
  /**
   * A user's personal device
   */
  readonly personalHost: RelativeFragmentUser_personalHost;
};
