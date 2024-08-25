import { Group } from "@mantine/core"
import { StartupCard } from "./components/StartupCard"

export default function Startup(){
    return  <div>
       <Group w={"100%"} style={{overflow:"scroll", scrollbarWidth:"none"} } mb={20}>
      <StartupCard />
      <StartupCard />
      <StartupCard/>
      <StartupCard /> 
      <StartupCard />      
      <StartupCard />          

    </Group>
    </div>
}