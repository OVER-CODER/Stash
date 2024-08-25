"use client";
import { Group, Stack, Text , Button } from "@mantine/core";
// import { MantineLogo } from '@mantinex/mantine-logo';
import { useState } from "react";
import { SessionCard } from "./Components/SessionCard";
import { ActionRing } from "./Components/ActionRing";

export default function Home() {
  const [user, setUser] = useState("");
  async function getUser() {
    const res = await fetch("http://localhost:6969/user");
    setUser(await res.text());
  }

  getUser();

  return (
    <> 
    <Group style={{display:'flex' , justifyContent:'space-between' , alignItems:'center'}}>
      <Group gap={0} align="baseline">
        <Text fz={28} fw={600}>Good Evening</Text>
        <Text fw={600} fz={32} ml={8} c={"indigo"}>{user.slice(0,1).toUpperCase() + user.slice(1,)} !</Text>
        <Text w={"100%"} fz={16} fw={400} style={{translate:"0px -5px"}} c={"dimmed"}>Ready to be productive?</Text>
      </Group>
      <Group>
        <Button radius="md" mt="xl" size="lg"  mb="xl" variant='light'  mr={5}>Save Config</Button>
      </Group>
    </Group>
    <Group gap={0} align="baseline" my={"md"}>
      <Text fz={24} fw={600}>Recent Sessions</Text>
    </Group>
    <Group w={"100%"} wrap="nowrap" style={{overflow:"scroll", scrollbarWidth:"none"} } mb={20}>
      <SessionCard />
      <SessionCard />
      <SessionCard />
      <SessionCard />      
    </Group>
    <ActionRing />
    </>
  );
}