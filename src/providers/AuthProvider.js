import { getClient } from './Client';
import gql from 'graphql-tag';

export const authProvider = {
  login: async (params) => {
    const client = getClient();
    let response = await client.mutate({
      mutation: gql`
        mutation Login($userName: String!, $password: String!) {
          login(email: $userName, password: $password) {
            error
            token {
              access_token
              token_type
            }
          }
        }
      `,
      variables: {
        userName: params.username,
        password: params.password,
      },
    });
    client.stop();

    response = response.data.login;

    localStorage.removeItem('token');
    if (response.token) {
      localStorage.setItem('token', response.token.access_token);
      return Promise.resolve();
    } else {
      return Promise.reject(response.error);
    }
  },
  logout: async (params) => {
    const client = getClient();
    await client.mutate({
      mutation: gql`
        mutation Logout {
          logout {
            error
            logged_out
          }
        }
      `,
    });
    client.stop();

    localStorage.removeItem('token');
    return Promise.resolve();
  },
  checkAuth: () => {
    const token = localStorage.getItem('token');
    if (token) {
      return Promise.resolve();
    }
    return Promise.reject();
  },
  getPermissions: async (params) => {
    // console.log(params);
    // return fetch(`${baseURL}${resource}`);
  },
  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      return Promise.reject();
    }
    return Promise.resolve();
  },
};
