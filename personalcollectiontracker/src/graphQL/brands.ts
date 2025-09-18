import { gql } from '@/__generated__/gql';

const BRAND_FRAGMENT = gql(`
  fragment BrandFragment on Brand {
    id
    name
    description
    logoUrl
    deleted
  }
`);

const GET_ALL_BRANDS = gql(`
  query GetAllBrands($filter: BrandFilter) {
    brands(filter: $filter) {
      id
      name
      description
      logoUrl
      deleted
    }
  }
`);

const GET_BRAND = gql(`
  query GetBrand($id: ID!) {
    brand(id: $id) {
      id
      name
      description
      logoUrl
      deleted
    }
  }
`);

const CREATE_BRAND = gql(`
  mutation CreateBrand($input: BrandInput!) {
    createBrand(input: $input) {
      id
      name
      description
      logoUrl
      deleted
    }
  }
`);

const UPDATE_BRAND = gql(`
  mutation UpdateBrand($input: BrandInput!) {
    updateBrand(input: $input) {
      id
      name
      description
      logoUrl
      deleted
    }
  }
`);

const DELETE_BRAND = gql(`
  mutation DeleteBrand($id: ID!) {
    deleteBrand(id: $id)
  }
`);

export { BRAND_FRAGMENT, CREATE_BRAND, DELETE_BRAND, GET_ALL_BRANDS, GET_BRAND, UPDATE_BRAND };
