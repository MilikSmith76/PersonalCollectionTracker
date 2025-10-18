import { gql } from '@/__generated__/gql';

const PUBLISHER_FRAGMENT = gql(`
  fragment PublisherFragment on Publisher {
    id
    name
    description
    logoUrl
    deleted
  }
`);

const GET_ALL_PUBLISHERS = gql(`
  query GetAllPublishers($filter: PublisherFilter) {
    publishers(filter: $filter) {
      ...PublisherFragment
    }
  }
`);

const GET_PUBLISHER = gql(`
  query GetPublisher($id: ID!) {
    publisher(id: $id) {
      ...PublisherFragment
    }
  }
`);

const CREATE_PUBLISHER = gql(`
  mutation CreatePublisher($input: PublisherInput!) {
    createPublisher(input: $input) {
      ...PublisherFragment
    }
  }
`);

const UPDATE_PUBLISHER = gql(`
  mutation UpdatePublisher($input: PublisherInput!) {
    updatePublisher(input: $input) {
      ...PublisherFragment
    }
  }
`);

const DELETE_PUBLISHER = gql(`
  mutation DeletePublisher($id: ID!) {
    deletePublisher(id: $id)
  }
`);

export {
    CREATE_PUBLISHER,
    DELETE_PUBLISHER,
    GET_ALL_PUBLISHERS,
    GET_PUBLISHER,
    PUBLISHER_FRAGMENT,
    UPDATE_PUBLISHER,
};
