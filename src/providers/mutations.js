import gql from 'graphql-tag';

export const create_groups = gql`
  mutation CreateGroup($group: String!) {
    create_group(group: $group) {
      error
      group {
        id
        group
      }
    }
  }
`;
