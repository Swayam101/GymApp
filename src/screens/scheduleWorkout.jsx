import { MusicOffOutlined } from "@mui/icons-material";
import { Button, FormControl, InputLabel, MenuItem, Paper, Select } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import SelectWorkoutNav from "../components/selectWorkoutNav";
import { Animation, PieSeries } from "@devexpress/dx-react-chart";
import { Chart, Legend, Title } from "@devexpress/dx-react-chart-material-ui";

const chartData=[
    {muscle:"Chest",members:12},
    {muscle:"Biceps",members:20},
    {muscle:"Triceps",members:30},
    {muscle:"Back",members:2},
    {muscle:"Legs",members:60},
]

const formStyling={
    height:"30vh",
    justifyContent:"center",
    alignItems:"center"
}

const ScheduleWorkout=()=>{

    const handleChange=(event)=>{
        setMuscle(event.target.value)
      } 

    const [muscle,setMuscle]=useState("Chest")
    return(
        <>
        <SelectWorkoutNav />
        <Stack style={formStyling}>
        <FormControl>
            <InputLabel id="test-select-label">Select Muscle You Want To Train</InputLabel>
        <Select style={{width:"15rem"}}
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        label="Select Muscle You Want To Train"
        value={muscle}
        onChange={handleChange}>
         <MenuItem value="C">Chest</MenuItem>
         <MenuItem value="B">Back</MenuItem>
         <MenuItem value="T">Triceps</MenuItem>
         <MenuItem value="Bi">Biceps</MenuItem>
         <MenuItem value="L">Legs</MenuItem>
        </Select>
        <Button variant="outlined">Submit</Button>
        </FormControl>
        </Stack>
          <Chart data={chartData}>
         <PieSeries valueField="members" argumentField="muscle"></PieSeries>
         <Title text="What Others Are Training Today?"></Title>
         <Legend/>
         <Animation/>
         
          </Chart>
        
        </>
    )
}
export default ScheduleWorkout