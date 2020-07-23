import React from 'react';
import {
  Create,
  Datagrid,
  Edit,
  EmailField,
  List,
  PasswordInput,
  ReferenceInput,
  SelectInput,
  Show,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
} from 'react-admin';
import { ListActions, ShowActions } from '../Actions';

// actions={<ListActions hasCreate={true} />}
export const UserList = (props) => (
  <List {...props} actions={<ListActions />}>
    <Datagrid rowClick={'show'}>
      <TextField source='id' />
      <EmailField source='user_name' />
      <TextField source='group' />
    </Datagrid>
  </List>
);

export const UserShow = (props) => (
  <Show {...props} actions={<ShowActions />}>
    <SimpleShowLayout>
      <TextField source='id' />
      <EmailField source='user_name' />
      <TextField source='group' />
    </SimpleShowLayout>
  </Show>
);

export const UserCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label='email' source='user_name' />
        <PasswordInput source='password' />
        <ReferenceInput source='group' reference='groups'>
          <SelectInput optionText='group' optionValue='group' source='group' />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

export const UserEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label='email' source='user_name' />
        <PasswordInput source='password' />
        <ReferenceInput source='group' reference='groups'>
          <SelectInput optionText='group' optionValue='group' source='group' />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};