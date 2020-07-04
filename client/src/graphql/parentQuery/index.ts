import gql from "graphql-tag";

export const ADD_PARENT = gql`
  mutation AddParent($parentInput: CreateParentInput!) {
    createParent(input: $parentInput) {
      parent {
        id
        childId
        first
        second
        createdAt
      }
    }
  }
`;

export const GET_PARENT_INFO = gql`
  query GetChilInfo($id: UUID!) {
    chlidInfo(id: $id) {
      id
    }
  }
`;

export const ADD_PARENT_INFO = gql`
  mutation AddParentInfo($parentInfoInput: CreateParentInfoInput!) {
    createParentInfo(input: $parentInfoInput) {
      parentInfo {
        parentId
        firstname
        lastname
        address
        city
        state
        zip
        email
        homePhone
        mobile
        work
        createdAt
      }
    }
  }
`;
