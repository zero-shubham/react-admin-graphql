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
export const GroupList = (props) => (
  <List {...props} actions={<ListActions />}>
    <Datagrid rowClick={'show'}>
      <TextField source='id' />
      <TextField source='group' />
    </Datagrid>
  </List>
);

export const GroupShow = (props) => (
  <Show {...props} actions={<ShowActions />}>
    <SimpleShowLayout>
      <TextField source='id' />
      <TextField source='group' />
    </SimpleShowLayout>
  </Show>
);

export const GroupCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label='group' source='group' />
      </SimpleForm>
    </Create>
  );
};
