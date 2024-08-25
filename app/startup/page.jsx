"use client"
import { Grid, Group } from "@mantine/core"
import { StartupCard } from "./components/StartupCard"
import { IconGasStation, IconGauge, IconManualGearbox, IconUsers } from '@tabler/icons-react';


export default function Startup(){
    return  <div>
      <h1 >Select a Single Session to open on Startup</h1>
      <StartupCard/>
       
     
  
    </div>
}