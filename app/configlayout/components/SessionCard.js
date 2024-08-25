'use client'
import { Card, Avatar, Text, Group, Button , Badge, Center} from '@mantine/core';
import classes from './SessionCard.module.css';


const stats = [
  { value: '34K', label: 'Followers' },
  { value: '13', label: 'Windows' },
  { value: '2 Hours Ago', label: 'Last Used' },
];

export function SessionCard() {
  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text ta="center" fz="lg" fw={500}>
        {stat.value}
      </Text>
      <Text ta="center" fz="sm" c="dimmed" lh={1}>
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <Card withBorder padding="xl" radius="md" w={360} mt={8}  flex className={classes.card}>
      <Card.Section
        h={140}
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80)',
        }}
      />
      {/* <Avatar
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"
        size={80}
        radius={80}
        mx="auto"
        mt={-30}
        className={classes.avatar}
      /> */}
      <Group justify="center" mt="md">
       <Badge size="lg" p={5} px={8} ta={Center} justify={Center} variant="light">
         Session Name   
        </Badge>
      </Group>
      {/* <Text ta="center" fz="sm" c="dimmed">
        Fullstack engineer
      </Text> */}
      <Group mt="lg" justify="center" gap={30}>
        {items}
      </Group>
      <Button  radius="md" mt="xl" size="mg" variant='light' >
        Edit Session
      </Button>
    </Card>
    
  );
}