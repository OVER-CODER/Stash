'use client'
import { Avatar, Badge, Table, Group, Text, Select , Button ,Checkbox  } from '@mantine/core';
import { useState } from 'react';
import classes from './Checkbox.module.css';
const data = [
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png',
    name: 'Robert Wolfkisser',
    job: 'Engineer',
    email: 'rob_wolf@gmail.com',
    role: 'Collaborator',
    lastActive: '2 days ago',
    active: true,
    id: 1,  },
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-6.png',
    name: 'Jill Jailbreaker',
    job: 'Engineer',
    email: 'jj@breaker.com',
    role: 'Collaborator',
    lastActive: '6 days ago',
    active: true,
    id: 2,
  },
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png',
    name: 'Henry Silkeater',
    job: 'Designer',
    email: 'henry@silkeater.io',
    role: 'Contractor',
    lastActive: '2 days ago',
    active: false,
    id: 3,
  },
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
    name: 'Bill Horsefighter',
    job: 'Designer',
    email: 'bhorsefighter@gmail.com',
    role: 'Contractor',
    lastActive: '5 days ago',
    active: true,
    id: 4,
  },
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png',
    name: 'Jeremy Footviewer',
    job: 'Manager',
    email: 'jeremy@foot.dev',
    role: 'Manager',
    lastActive: '3 days ago',
    active: false,
    id: 5,
  },
];

const rolesData = ['Window 1 ', 'Window 2 ', 'Window 3 ' , 'Window 4'];

export function Roles() {
    const [checked, setChecked] = useState(false);
    // const [checked, setChecked] = useState(
    //     data.reduce((acc, item) => {
    //       acc[item.id] = false;
    //       return acc;
    //     }, {})
    //   );
    //   const handleCheckboxChange = (id) => {
    //     setChecked((prev) => ({
    //       ...prev,
    //       [id]: !prev[id],
    //     }));
    //   };
  const rows = data.map((item) => (
    <Table.Tr key={item.id}>
      <Table.Td>
        <Group gap="sm">
          <Avatar size={40} src={item.avatar} radius={40} />
          <div>
            <Text fz="sm" fw={500}>
              {item.name}
            </Text>
            <Text fz="xs" c="dimmed">
              {item.email}
            </Text>
          </div>
        </Group>
      </Table.Td>
      <Table.Td>{item.job}</Table.Td>

      <Table.Td>
        {item.lastActive}
      </Table.Td>
      <Table.Td>
      {rolesData}
      </Table.Td>
      <Table.Td>
        <Group justify='center'>
        <Checkbox
      flex={1} 
      classNames={classes}
      label="Select Session"
      checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
      wrapperProps={{
        onClick: () => setChecked((c) => !c),
      }}
    />
        <Button variant="filled" radius="md" flex={1}>Edit</Button>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={800}> 
      <Table verticalSpacing="sm">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Session Name</Table.Th>
            <Table.Th>Open Window</Table.Th>
            <Table.Th>Last active</Table.Th>
            <Table.Th>Windows Selected</Table.Th>
            <Table.Th>Status</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}