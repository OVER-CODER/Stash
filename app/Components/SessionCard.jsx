import { IconHeart } from '@tabler/icons-react';
import { Card, Image, Text, Group, Badge, Button, ActionIcon } from '@mantine/core';
import classes from './SessionCard.module.css';
import { restoreLayout } from '../utils/api';
import { useState } from 'react';

const mockdata = {
  image:
    'https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
  title: 'Can you Hack IT',
  time_ago: '2 hours ago',
  description:
    'Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.',
  badges: [
    { emoji: '☀️', label: 'VS Code' },
    { emoji: '🦓', label: 'MS Teams' },
    { emoji: '🌊', label: 'WhatsApp' },
    { emoji: '🌲', label: 'Firefox' },
    // { emoji: '🤽', label: 'Water sports' },
  ],
};



export function SessionCard({title,loading,setLoading }) {
  const { time_ago ,image, description, badges } = mockdata;
  const features = badges.map((badge) => (
    <Badge variant="light" key={badge.label} leftSection={badge.emoji}>
      {badge.label}
    </Badge>
  ));

  async function restore(){
    setLoading(true);
    const res = await restoreLayout(title);
    console.log(res);
    setLoading(false);
  }

  return (
    <Card withBorder radius="md" p="md" mb={20} miw={300} className={classes.card} flex={1}>
      <Card.Section>
        <Image src={image} alt={title} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group justify="space-between">
          <Text fz="lg" fw={600}>
            {title}
          </Text>
          <Badge size="sm" p={5} variant="light">
            {time_ago}
          </Badge>
        </Group>
        {/* <Text fz="sm" mt="xs">
          {description}
        </Text> */}
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} c="dimmed">
          Windows Open
        </Text>
        <Group gap={7} mt={5}>
          {features}
        </Group>
      </Card.Section>

      <Group mt="xs">
        <Button radius="md" loading={loading} onClick={restore} variant='light' style={{ flex: 1 }}>
          Restore Session
        </Button>
        <ActionIcon bg={"transparent"} radius="md" size={36}>
          <IconHeart className={classes.like} stroke={1.5} />
        </ActionIcon>
      </Group>
    </Card>
  );
}