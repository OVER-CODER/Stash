"use client";
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Center,
  Button,
  Grid,
} from "@mantine/core";
import {
  IconGasStation,
  IconGauge,
  IconManualGearbox,
  IconUsers,
} from "@tabler/icons-react";
import classes from "./start.module.css";
import { useState } from "react";

const data = [
  {
    id: 1,
    title: "Codinnkk Session",
    tag: "Heavy Coding",
    desc: "Coding horri hai takdi",
    apps: [
      { label: "Visual Studie Code", icon: IconUsers },
      { label: "Terminal", icon: IconGauge },
      { label: "Google Chrome", icon: IconManualGearbox },
      { label: "Docker", icon: IconGasStation },
    ],
    icon: "startup-img/hello.png",
  },
  {
    id: 2,
    title: "Personal Session",
    tag: "Light Coding",
    desc: "Coding horri hai takdi",
    apps: [
      { label: "Visual Studie Code", icon: IconUsers },
      { label: "Terminal", icon: IconGauge },
      { label: "Google Chrome", icon: IconManualGearbox },
      { label: "Docker", icon: IconGasStation },
    ],
    icon: "startup-img/hello1.png",
  },
  {
    id: 3,
    title: "Personal Session",
    tag: "Light Coding",
    desc: "Coding horri hai takdi",
    apps: [
      { label: "Visual Studie Code", icon: IconUsers },
      { label: "Terminal", icon: IconGauge },
      { label: "Google Chrome", icon: IconManualGearbox },
      { label: "Docker", icon: IconGasStation },
    ],
    icon: "startup-img/hello3.png",
  },
  {
    id: 4,
    title: "Personal Session",
    tag: "Light Coding",
    desc: "Coding horri hai takdi",
    apps: [
      { label: "Visual Studie Code", icon: IconUsers },
      { label: "Terminal", icon: IconGauge },
      { label: "Google Chrome", icon: IconManualGearbox },
      { label: "Docker", icon: IconGasStation },
    ],
    icon: "startup-img/hello.png",
  },
  {
    id: 5,
    title: "Personal Session",
    tag: "Light Coding",
    desc: "Coding horri hai takdi",
    apps: [
      { label: "Visual Studie Code", icon: IconUsers },
      { label: "Terminal", icon: IconGauge },
      { label: "Google Chrome", icon: IconManualGearbox },
      { label: "Docker", icon: IconGasStation },
    ],
    icon: "startup-img/hello3.png",
  },
];

export function StartupCard() {
  const [titler, setTitler] = useState(null);

  function handleClick(ide) {
    setTitler(ide);
    console.log(ide);
  }

  return (
    <div>
      <Grid>
        {data.map((item) => {
          const features = item.apps.map((feature) => (
            <Center key={feature.label}>
              <feature.icon size="1.05rem" className={classes.icon} stroke={1.5} />
              <Text size="xs">{feature.label}</Text>
            </Center>
          ));

          return (
            <Grid.Col
              key={item.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              span={4}
            >
              <Card withBorder radius="md" className={classes.card} 
              style={{
                  borderColor: titler === item.id ? 'dodgerblue' : '',
                  borderWidth: titler === item.id ? '3px' : '',
                }} >
              
                <Card.Section className={classes.imageSection}>
                  <Image src={item.icon} alt="collection-img" />
                </Card.Section>

                <Group justify="center" mt="md">
                  <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <Text fw={500}>{item.title}</Text>
                      <Text fz="xs" c="dimmed">
                        {item.desc}
                      </Text>
                    </div>
                    <Badge variant="outline">{item.tag}</Badge>
                  </div>
                </Group>

                <Card.Section className={classes.section} mt="md">
                  <Text fz="sm" c="dimmed" className={classes.label}>
                    Apps in the session
                  </Text>

                  <Group gap={8}>{features}</Group>
                </Card.Section>

                <Card.Section className={classes.section}>
                  <Group gap={30}>
                    <Button
                      onClick={() => handleClick(item.id)}
                      radius="xl"
                      style={{ flex: 1 }}
                    >
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
  );
}
