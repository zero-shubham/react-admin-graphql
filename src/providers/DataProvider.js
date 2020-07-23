import { getClient, buildQuery } from './Client';
import * as queries from './queries';
import * as mutations from './mutations';

const baseURL = process.env.REACT_APP_API;

export const dataProvider = {
  getOne: async (resource, params) => {
    const client = getClient();
    let response = await client.query({
      query: queries[`getOne_${resource}`],
      variables: {
        ...params,
      },
    });

    const fieldName = resource.slice(0, -1);
    response = response.data[fieldName];
    return {
      data: response[fieldName],
      total: response[fieldName] ? response[fieldName].length : 0,
    };
  },
  getList: async (resource, params) => {
    const client = getClient();
    const reqParams = {
      page: (params.pagination.page - 1) * params.pagination.perPage,
      perPage: params.pagination.perPage,
    };
    let response = await client.query({
      query: queries[`getList_${resource}`],
      variables: {
        ...reqParams,
      },
    });
    if (response?.data?.error) {
      return Promise.reject(response.data.error);
    }

    response = response.data[resource];
    return {
      data: response[resource],
      total: response ? response.total_count : 0,
    };
  },
  getMany: async (resource, params) => {
    const client = getClient();
    let response = await client.query({
      query: queries[`getList_${resource}`],
    });
    response = response.data[resource];
    response = response[resource].filter((item) =>
      params.ids.includes(item.id)
    );
    return {
      data: response,
      total: response ? response.total_count : 0,
    };
  },
  getManyReference: async (resource, params) => {
    console.log(resource, params, '===');
  },
  create: async (resource, params) => {
    const client = getClient();
    let response = await client.mutate({
      mutation: mutations[`create_${resource}`],
      variables: {
        ...params.data,
      },
    });

    const fieldName = resource.slice(0, -1);
    response = response.data[`create_${fieldName}`];
    if (response.error) {
      return Promise.reject();
    }

    return {
      data: response[fieldName],
    };
  },
  update: async (resource, params) => {
    const token = localStorage.getItem('token');
    let response = await fetch(`${baseURL}/${resource}/${params.data.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(params.data),
    });
    response = await response.json();
    if (response.id) {
      return {
        data: response,
      };
    }
    return Promise.reject();
  },
  delete: async (resource, params) => {
    const token = localStorage.getItem('token');
    let response = await fetch(`${baseURL}/${resource}/${params.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    response = await response.json();
    console.log(response);
    if (response.deleted) {
      return {
        data: response,
      };
    }
    return Promise.reject();
  },
  deleteMany: async (resource, params) => {
    const token = localStorage.getItem('token');
    let success = true;
    params.ids.forEach(async (id) => {
      let response = await fetch(`${baseURL}/${resource}/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      response = await response.json();
      if (!response.deleted) {
        success = false;
      }
    });
    if (success) {
      return {
        data: true,
      };
    }
    return Promise.reject();
  },
};
