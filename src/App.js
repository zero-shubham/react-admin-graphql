import React, { useState, useEffect } from 'react';
import { Admin, Resource, Delete } from 'react-admin';
import { dataProvider } from './providers/DataProvider';
import { authProvider } from './providers/AuthProvider';
import { UserCreate, UserEdit, UserList, UserShow } from './resources/Users';
import { GroupCreate, GroupList, GroupShow } from './resources/Groups';
import {
  PermissionShow,
  PermissionList,
  PermissionCreate,
  PermissionEdit,
} from './resources/Permissions';
import { ResourceList } from './resources/Resources';
import './App.css';

function App() {
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource
        name='users'
        list={UserList}
        show={UserShow}
        edit={UserEdit}
        create={UserCreate}
      />
      <Resource
        name='groups'
        list={GroupList}
        show={GroupShow}
        create={GroupCreate}
      />
      <Resource name='resources' list={ResourceList} />
      <Resource
        name='permissions'
        list={PermissionList}
        show={PermissionShow}
        edit={PermissionEdit}
        create={PermissionCreate}
      />
    </Admin>
  );
}

export default App;
