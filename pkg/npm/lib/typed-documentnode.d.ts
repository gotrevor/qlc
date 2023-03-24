import type { DocumentNode } from "graphql";

type BasicObject = Record<string, unknown>;

/** Type of a Query or Subscription GraphQL document */
export type QueryDocumentNode<
  Data extends BasicObject,
  Variables extends BasicObject
> = DocumentNode & { __typedDocumentNodeQuery: never };

/** Type of a Mutation GraphQL document */
export type MutationDocumentNode<
  Data extends BasicObject,
  Variables extends BasicObject
> = DocumentNode & { __typedDocumentNodeMutation: never };

/**
 * Helper for extracting a data type from a typed DocumentNode
 * @example
 import MyQuery from "./query.graphql";
 // MyQuery is QueryDocumentNode<D, V>
 type MyQuerysData = DataOf<typeof MyQuery>; // MyQuerysData is now type D
 */
export type DataOf<T> = T extends QueryDocumentNode<infer Data, infer Variables>
  ? Data
  : T extends MutationDocumentNode<infer Data, infer Variables>
  ? Data
  : never;

/**
 * Helper for extracting a data type from a typed DocumentNode
 * @example
 import MyMutation from "./mutation.graphql";
 // MyMutation is MutationDocumentNode<D, V>
 type MyMutationsVars = VariablesOf<typeof MyMutation>; // MyMutationsVars is now type V
 */
export type VariablesOf<T> = T extends QueryDocumentNode<
  infer Data,
  infer Variables
>
  ? Variables
  : T extends MutationDocumentNode<infer Data, infer Variables>
  ? Variables
  : never;
