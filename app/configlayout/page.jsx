import { SessionCard } from "./components/SessionCard";
import { Group } from "@mantine/core";

export default function configlayout(){
return <>
    <Group w={"100%"} wrap="nowrap" style={{overflow:"scroll", scrollbarWidth:"none"} } mb={20}>
      <SessionCard />
      <SessionCard />
      <SessionCard />
      <SessionCard />      
    </Group>
</>
}
