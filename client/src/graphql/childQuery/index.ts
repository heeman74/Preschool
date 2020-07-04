import gql from "graphql-tag";

export const ADD_CHILD = gql`
  mutation AddChild($childInput: CreateChildInput!) {
    createChild(input: $childInput) {
      child {
        id
        createdAt
      }
    }
  }
`;

export const GET_CHILD_INFO = gql`
  query GetChilInfo($id: UUID!) {
    chlidInfo(id: $id) {
      id
    }
  }
`;
export const ADD_CHID_INFO = gql`
  mutation AddChildInfo($childInfoInput: CreateChildInfoInput!) {
    createChildInfo(input: $childInfoInput) {
      childInfo {
        childId
        firstName
        lastName
        gender
        birthday
        agency
        emergencyContact
        emergencyRelationship
        allergies
        createdAt
      }
    }
  }
`;

export const GET_ALL_CHILDREN_INFO = gql`
  query GetChildrenInfo {
    allChildInfos {
      nodes {
        childId
        firstName
        lastName
        gender
        birthday
        agency
        emergencyContact
        emergencyRelationship
        allergies
        childByChildId {
          parentId
        }
      }
    }
  }
`;

export const GET_CHILD_INFO_BY_ID = gql`
  query GetChildInfoById($id: UUID!) {
    childInfoByChildId(childId: $id) {
      firstName
      lastName
      gender
      birthday
      agency
      emergencyContact
      emergencyRelationship
      allergies
      childByChildId {
        parentsByChildId {
          nodes {
            id
          }
        }
      }
    }
  }
`;
