/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  fragment BrandFragment on Brand {\n    id\n    name\n    description\n    logoUrl\n    deleted\n  }\n": typeof types.BrandFragmentFragmentDoc,
    "\n  query GetAllBrands($filter: BrandFilter) {\n    brands(filter: $filter) {\n      ...BrandFragment\n    }\n  }\n": typeof types.GetAllBrandsDocument,
    "\n  query GetBrand($id: ID!) {\n    brand(id: $id) {\n      ...BrandFragment\n    }\n  }\n": typeof types.GetBrandDocument,
    "\n  mutation CreateBrand($input: BrandInput!) {\n    createBrand(input: $input) {\n      ...BrandFragment\n    }\n  }\n": typeof types.CreateBrandDocument,
    "\n  mutation UpdateBrand($input: BrandInput!) {\n    updateBrand(input: $input) {\n      ...BrandFragment\n    }\n  }\n": typeof types.UpdateBrandDocument,
    "\n  mutation DeleteBrand($id: ID!) {\n    deleteBrand(id: $id)\n  }\n": typeof types.DeleteBrandDocument,
    "\n  fragment PublisherFragment on Publisher {\n    id\n    name\n    description\n    logoUrl\n    deleted\n  }\n": typeof types.PublisherFragmentFragmentDoc,
    "\n  query GetAllPublishers($filter: PublisherFilter) {\n    publishers(filter: $filter) {\n      ...PublisherFragment\n    }\n  }\n": typeof types.GetAllPublishersDocument,
    "\n  query GetPublisher($id: ID!) {\n    publisher(id: $id) {\n      ...PublisherFragment\n    }\n  }\n": typeof types.GetPublisherDocument,
    "\n  mutation CreatePublisher($input: PublisherInput!) {\n    createPublisher(input: $input) {\n      ...PublisherFragment\n    }\n  }\n": typeof types.CreatePublisherDocument,
    "\n  mutation UpdatePublisher($input: PublisherInput!) {\n    updatePublisher(input: $input) {\n      ...PublisherFragment\n    }\n  }\n": typeof types.UpdatePublisherDocument,
    "\n  mutation DeletePublisher($id: ID!) {\n    deletePublisher(id: $id)\n  }\n": typeof types.DeletePublisherDocument,
};
const documents: Documents = {
    "\n  fragment BrandFragment on Brand {\n    id\n    name\n    description\n    logoUrl\n    deleted\n  }\n": types.BrandFragmentFragmentDoc,
    "\n  query GetAllBrands($filter: BrandFilter) {\n    brands(filter: $filter) {\n      ...BrandFragment\n    }\n  }\n": types.GetAllBrandsDocument,
    "\n  query GetBrand($id: ID!) {\n    brand(id: $id) {\n      ...BrandFragment\n    }\n  }\n": types.GetBrandDocument,
    "\n  mutation CreateBrand($input: BrandInput!) {\n    createBrand(input: $input) {\n      ...BrandFragment\n    }\n  }\n": types.CreateBrandDocument,
    "\n  mutation UpdateBrand($input: BrandInput!) {\n    updateBrand(input: $input) {\n      ...BrandFragment\n    }\n  }\n": types.UpdateBrandDocument,
    "\n  mutation DeleteBrand($id: ID!) {\n    deleteBrand(id: $id)\n  }\n": types.DeleteBrandDocument,
    "\n  fragment PublisherFragment on Publisher {\n    id\n    name\n    description\n    logoUrl\n    deleted\n  }\n": types.PublisherFragmentFragmentDoc,
    "\n  query GetAllPublishers($filter: PublisherFilter) {\n    publishers(filter: $filter) {\n      ...PublisherFragment\n    }\n  }\n": types.GetAllPublishersDocument,
    "\n  query GetPublisher($id: ID!) {\n    publisher(id: $id) {\n      ...PublisherFragment\n    }\n  }\n": types.GetPublisherDocument,
    "\n  mutation CreatePublisher($input: PublisherInput!) {\n    createPublisher(input: $input) {\n      ...PublisherFragment\n    }\n  }\n": types.CreatePublisherDocument,
    "\n  mutation UpdatePublisher($input: PublisherInput!) {\n    updatePublisher(input: $input) {\n      ...PublisherFragment\n    }\n  }\n": types.UpdatePublisherDocument,
    "\n  mutation DeletePublisher($id: ID!) {\n    deletePublisher(id: $id)\n  }\n": types.DeletePublisherDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment BrandFragment on Brand {\n    id\n    name\n    description\n    logoUrl\n    deleted\n  }\n"): (typeof documents)["\n  fragment BrandFragment on Brand {\n    id\n    name\n    description\n    logoUrl\n    deleted\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAllBrands($filter: BrandFilter) {\n    brands(filter: $filter) {\n      ...BrandFragment\n    }\n  }\n"): (typeof documents)["\n  query GetAllBrands($filter: BrandFilter) {\n    brands(filter: $filter) {\n      ...BrandFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetBrand($id: ID!) {\n    brand(id: $id) {\n      ...BrandFragment\n    }\n  }\n"): (typeof documents)["\n  query GetBrand($id: ID!) {\n    brand(id: $id) {\n      ...BrandFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateBrand($input: BrandInput!) {\n    createBrand(input: $input) {\n      ...BrandFragment\n    }\n  }\n"): (typeof documents)["\n  mutation CreateBrand($input: BrandInput!) {\n    createBrand(input: $input) {\n      ...BrandFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateBrand($input: BrandInput!) {\n    updateBrand(input: $input) {\n      ...BrandFragment\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateBrand($input: BrandInput!) {\n    updateBrand(input: $input) {\n      ...BrandFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteBrand($id: ID!) {\n    deleteBrand(id: $id)\n  }\n"): (typeof documents)["\n  mutation DeleteBrand($id: ID!) {\n    deleteBrand(id: $id)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment PublisherFragment on Publisher {\n    id\n    name\n    description\n    logoUrl\n    deleted\n  }\n"): (typeof documents)["\n  fragment PublisherFragment on Publisher {\n    id\n    name\n    description\n    logoUrl\n    deleted\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAllPublishers($filter: PublisherFilter) {\n    publishers(filter: $filter) {\n      ...PublisherFragment\n    }\n  }\n"): (typeof documents)["\n  query GetAllPublishers($filter: PublisherFilter) {\n    publishers(filter: $filter) {\n      ...PublisherFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetPublisher($id: ID!) {\n    publisher(id: $id) {\n      ...PublisherFragment\n    }\n  }\n"): (typeof documents)["\n  query GetPublisher($id: ID!) {\n    publisher(id: $id) {\n      ...PublisherFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreatePublisher($input: PublisherInput!) {\n    createPublisher(input: $input) {\n      ...PublisherFragment\n    }\n  }\n"): (typeof documents)["\n  mutation CreatePublisher($input: PublisherInput!) {\n    createPublisher(input: $input) {\n      ...PublisherFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdatePublisher($input: PublisherInput!) {\n    updatePublisher(input: $input) {\n      ...PublisherFragment\n    }\n  }\n"): (typeof documents)["\n  mutation UpdatePublisher($input: PublisherInput!) {\n    updatePublisher(input: $input) {\n      ...PublisherFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeletePublisher($id: ID!) {\n    deletePublisher(id: $id)\n  }\n"): (typeof documents)["\n  mutation DeletePublisher($id: ID!) {\n    deletePublisher(id: $id)\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;