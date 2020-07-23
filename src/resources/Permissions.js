import React from 'react';
import {
  BooleanField,
  BooleanInput,
  Create,
  Datagrid,
  Edit,
  List,
  ReferenceInput,
  SelectInput,
  Show,
  SimpleForm,
  SimpleShowLayout,
  TextField,
} from 'react-admin';
import { ListActions, ShowActions } from '../Actions';

// actions={<ListActions hasCreate={true} />}
export const PermissionList = (props) => (
  <List {...props} actions={<ListActions />}>
    <Datagrid rowClick={'show'}>
      <TextField source='id' />
      <TextField source='group' />
      <TextField source='resource' />
      <BooleanField source='create' />
      <BooleanField source='read' />
      <BooleanField source='update' />
      <BooleanField source='delete' />
    </Datagrid>
  </List>
);

export const PermissionShow = (props) => (
  <Show {...props} actions={<ShowActions />}>
    <SimpleShowLayout>
      <TextField source='id' />
      <TextField source='group' />
      <TextField source='resource' />
      <BooleanField source='create' />
      <BooleanField source='read' />
      <BooleanField source='update' />
      <BooleanField source='delete' />
    </SimpleShowLayout>
  </Show>
);

export const PermissionCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source='resource' reference='resources'>
          <SelectInput
            optionText='resource_name'
            optionValue='resource_table'
          />
        </ReferenceInput>
        <ReferenceInput source='group' reference='groups'>
          <SelectInput optionText='group' optionValue='group' />
        </ReferenceInput>
        <BooleanInput source='create' initialValue={false} />
        <BooleanInput source='read' initialValue={false} />
        <BooleanInput source='update' initialValue={false} />
        <BooleanInput source='delete' initialValue={false} />
      </SimpleForm>
    </Create>
  );
};

export const PermissionEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextField source='resource' />
        <TextField source='group' />
        <BooleanInput source='create' />
        <BooleanInput source='read' />
        <BooleanInput source='update' />
        <BooleanInput source='delete' />
      </SimpleForm>
    </Edit>
  );
};
