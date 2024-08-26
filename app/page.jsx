"use client";
import { Group, Stack, Text , Button , Modal , TextInput , Card } from "@mantine/core";
// import { MantineLogo } from '@mantinex/mantine-logo';
import { useEffect, useState } from "react";
import { useDisclosure } from '@mantine/hooks';
import { SessionCard } from "./Components/SessionCard";
import { ActionRing } from "./Components/ActionRing";
import { dumpLayout,getLayouts } from "./utils/api";

export default function Home() {
  const [user, setUser] = useState("");
  async function getUser() {
    const res = await fetch("http://localhost:6969/user");
    setUser(await res.text());
  }
  const [opened, { open, close }] = useDisclosure(false);
  const [config, setConfig] = useState("");
  const [loading,setLoading] = useState(false);
  const [sessions, setSessions] = useState([]);
  
  async function dump() {
    setLoading(true);
    const res = await dumpLayout(config);
    console.log(res);
    setLoading(false);
    close();
    getSessions();
  }

  async function getSessions() {
    const res = await getLayouts();
    setSessions(res);
  }

  useEffect(() => {
    getUser();
    getSessions();
  }, []);


  return (
    <>
    <Group>
    <Modal opened={opened} onClose={close} title="Create New Config"  mb={12} >
        <Card shadow="sm" padding="lg" radius="md" withBorder bg={'#080819'} ><TextInput onChange={(e) => setConfig(e.target.value)} label="Config Name" placeholder="Type New Config Name" mb={10} mt={10} p={4} />
        <Button variant="light" mt={4} onClick={dump}>Submit</Button></Card>
      </Modal>
    </Group>
    
    <Group style={{display:'flex' , justifyContent:'space-between' , alignItems:'center'}}>
      <Group gap={0} align="baseline">
        <Text fz={28} fw={600}>Good Evening</Text>
        <Text fw={600} fz={32} ml={8} c={"indigo"}>{user.slice(0,1).toUpperCase() + user.slice(1,)} !</Text>
        <Text w={"100%"} fz={16} fw={400} style={{translate:"0px -5px"}} c={"dimmed"}>Ready to be productive?</Text>
      </Group>
      <Group>
        <Button radius="md" mt="xl" size="lg"  mb="xl" variant='light' onClick={open}  mr={5} >Create Config</Button>
      </Group>
    </Group>
    <Group gap={0} align="baseline" my={"md"}>
      <Text fz={24} fw={600}>Recent Sessions</Text>
    </Group>
    <Group w={"100%"} wrap="nowrap" style={{overflow:"scroll", scrollbarWidth:"none"} } mb={20}>
      {
          sessions.map((session) => ( <SessionCard key={session} title={session} time_ago={session}  />))
        }    
    </Group>
    <ActionRing />
    </>
  );
}