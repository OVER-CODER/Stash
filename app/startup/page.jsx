"use client"
import { Grid, Group } from "@mantine/core"
import { StartupCard } from "./components/StartupCard"

export default function Startup(){
    return  <div>
      <h1 >Select a Single Session to open on Startup</h1>

      <Grid>
      <Grid.Col span={4}><StartupCard /></Grid.Col>
      <Grid.Col span={4}><StartupCard /></Grid.Col>
      <Grid.Col span={4}><StartupCard /></Grid.Col>
      <Grid.Col span={4}><StartupCard /></Grid.Col>
      <Grid.Col span={4}><StartupCard /></Grid.Col>
      <Grid.Col span={4}><StartupCard /></Grid.Col>
      


            

      </Grid>
       
     
  
    </div>
}