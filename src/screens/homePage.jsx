import { Box, Stack } from "@mui/system"
import MiddleBox from "../components/middleBox"
import Navbar from "../components/Navbar"
import DiffNavbar from "../components/diffNavbar"
import React from "react"
import BottomFac from "../components/bottomFacilities"

const stackStyle={
    height:"100vh",
    flexDirecion:"column",
    justifyContent:"center",
}



const HomePage=()=>{
    return(
        <Box>
     <DiffNavbar />
    <Stack direction="column" spacing={2} justifyContent="space-between" style={stackStyle}>
   < MiddleBox />
   <BottomFac/>
    </Stack>
   </Box>
    )
}

export default HomePage;