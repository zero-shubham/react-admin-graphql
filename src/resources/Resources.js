import React from 'react';
import { Datagrid, List, Show, SimpleShowLayout, TextField } from 'react-admin';
import { ListActions, ShowActions } from '../Actions';

// actions={<ListActions hasCreate={true} />}
export const ResourceList = (props) => (
  <List {...props} actions={<ListActions />}>
    <Datagrid rowClick={'show'}>
      <TextField source='id' />
      <TextField source='resource_table' />
      <TextField source='resource_name' />
    </Datagrid>
  </List>
);

// export const ResourceShow = (props) => (
//   <Show {...props} actions={<ShowActions />}>
//     <SimpleShowLayout>
//       <TextField source='id' />
//       <TextField source='resource_table' />
//       <TextField source='resource_name' />
//     </SimpleShowLayout>
//   </Show>
// );