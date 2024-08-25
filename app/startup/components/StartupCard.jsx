"use client"
import { Card, Image, Text, Group, Badge, Center, Button, Grid } from '@mantine/core';
import { IconGasStation, IconGauge, IconManualGearbox, IconUsers } from '@tabler/icons-react';
import classes from './start.module.css';



const data = [
  { 
    id:1,
    title:"Coding Session" , 
    tag : "Heavy Coding",
    desc: "Coding horri hai takdi",
    apps: [
      { label: 'Visual Studie Code ', icon: IconUsers },
      { label: 'Terminal', icon: IconGauge },
      { label: 'Google Chrome', icon: IconManualGearbox },
      { label: 'Docker', icon: IconGasStation },
    ]

  }, 
  {  id:2,
    title:"Personal Session" , 
    tag : "Light Coding",
    desc: "Coding horri hai takdi",
    apps: [
      { label: 'Visual Studie Code ', icon: IconUsers },
      { label: 'Terminal', icon: IconGauge },
      { label: 'Google Chrome', icon: IconManualGearbox },
      { label: 'Docker', icon: IconGasStation },
    ]
  },
  {  id:3,
    title:"Personal Session" , 
    tag : "Light Coding",
    desc: "Coding horri hai takdi",
    apps: [
      { label: 'Visual Studie Code ', icon: IconUsers },
      { label: 'Terminal', icon: IconGauge },
      { label: 'Google Chrome', icon: IconManualGearbox },
      { label: 'Docker', icon: IconGasStation },
    ]
  },
  {  id:4,
    title:"Personal Session" , 
    tag : "Light Coding",
    desc: "Coding horri hai takdi",
    apps: [
      { label: 'Visual Studie Code ', icon: IconUsers },
      { label: 'Terminal', icon: IconGauge },
      { label: 'Google Chrome', icon: IconManualGearbox },
      { label: 'Docker', icon: IconGasStation },
    ]
  },
  {  id:5,
    title:"Personal Session" , 
    tag : "Light Coding",
    desc: "Coding horri hai takdi",
    apps: [
      { label: 'Visual Studie Code ', icon: IconUsers },
      { label: 'Terminal', icon: IconGauge },
      { label: 'Google Chrome', icon: IconManualGearbox },
      { label: 'Docker', icon: IconGasStation },
    ]
  }
]

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
    <div >
    <Grid>
    {data.map((item) => {
        const features = item.apps.map((feature) => (
          <Center key={feature.label}>
            <feature.icon size="1.05rem" className={classes.icon} stroke={1.5} />
            <Text size="xs">{feature.label}</Text>
          </Center>
        ));

        return (
          <Grid.Col key={item.id} span={4} >
            <Card withBorder radius="md" className={classes.card}>
              <Card.Section className={classes.imageSection}>
                <Image src="hello.png" alt="collection-img" />
              </Card.Section>

              <Group justify="center" mt="md">
                <div>
                  <Text fw={500}>{item.title}</Text>
                  <Text fz="xs" c="dimmed">
                    {item.desc}
                  </Text>
                </div>
                <Badge variant="outline">{item.tag}</Badge>
              </Group>

              <Card.Section className={classes.section} mt="md">
                <Text fz="sm" c="dimmed" className={classes.label}>
                  Apps in the session
                </Text>

                <Group gap={8} >
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
            </Card>
          </Grid.Col>
        );
      })}
    </Grid>
    </div>
    </>
   
  );
}