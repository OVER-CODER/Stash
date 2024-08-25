"use client"
import { Card, Image, Text, Group, Badge, Center, Button } from '@mantine/core';
import { IconGasStation, IconGauge, IconManualGearbox, IconUsers } from '@tabler/icons-react';
import classes from './start.module.css';

const mockdata = [
  { label: 'Visual Studie Code ', icon: IconUsers },
  { label: 'Terminal', icon: IconGauge },
  { label: 'Google Chrome', icon: IconManualGearbox },
  { label: 'Docker', icon: IconGasStation },
];

export function StartupCard() {
  const features = mockdata.map((feature) => (
    <Center key={feature.label}>
      <feature.icon size="1.05rem" className={classes.icon} stroke={1.5} />
      <Text size="xs">{feature.label}</Text>
    </Center>
  ));

  return (
    <>
     
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image src="https://i.imgur.com/ZL52Q2D.png" alt="Tesla Model S" />
      </Card.Section>

      <Group justify="space-between" mt="md">
        <div>
          <Text fw={500}>Coding Sess</Text>
          <Text fz="xs" c="dimmed">
           Coding horri hai takdi
          </Text>
        </div>
        <Badge variant="outline">Heavy Coding</Badge>
      </Group>

      <Card.Section className={classes.section} mt="md">
        <Text fz="sm" c="dimmed" className={classes.label}>
          Apps in the session 
        </Text>

        <Group gap={8} mb={-8}>
          {features}
        </Group>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group gap={30}>
          

          <Button radius="xl" style={{ flex: 1 }}>
           Select
          </Button>
        </Group>
      </Card.Section>
    </Card></>
   
  );
}