import gql from 'graphql-tag';

export const getList_users = gql`
  query Users($page: Int!, $perPage: Int!) {
    users(offset: $page, limit: $perPage) {
      error
      users {
        id
        user_name
        group
      }
      total_count
    }
  }
`;

export const getOne_users = gql`
  query User($id: UUID) {
    user(id: $id) {
      error
      user {
        id
        user_name
        group
      }
    }
  }
`;

export const getOne_groups = gql`
  query Group($id: UUID!) {
    group(id: $id) {
      error
      group {
        id
        group
      }
    }
  }
`;

export const getList_groups = gql`
  query Groups($page: Int!, $perPage: Int!) {
    groups(offset: $page, limit: $perPage) {
      error
      groups {
        id
        group
      }
      total_count
    }
  }
`;

export const getOne_permissions = gql`
  query Permission($id: UUID!) {
    permission(id: $id) {
      error
      permission {
        id
        group
        resource
        create
        read
        update
        delete
      }
    }
  }
`;

export const getList_permissions = gql`
  query Permissions($page: Int!, $perPage: Int!) {
    permissions(offset: $page, limit: $perPage) {
      error
      permissions {
        id
        group
        resource
        create
        read
        update
        delete
      }
      total_count
    }
  }
`;

export const getList_resources = gql`
  query Resources($page: Int!, $perPage: Int!) {
    resources(offset: $page, limit: $perPage) {
      error
      resources {
        id
        resource_table
        resource_name
      }
      total_count
    }
  }
`;