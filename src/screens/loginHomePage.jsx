import { Box, Stack } from "@mui/system";
import React from "react";
import MiddleBox from "../components/middleBox";
import Navbar from "../components/Navbar";
import DiffNavbar from "../components/diffNavbar";
import BottomFac from "../components/bottomFacilities";

const stackStyle={
    height:"65vh",
    flexDirecion:"column",
    justifyContent:"center",
}

const LoginHomePage=()=>{
    return(
        <Box>
     <Navbar />
    <Stack direction="column" spacing={2} justifyContent="space-between" style={stackStyle}>
   < MiddleBox />
    </Stack>
    <BottomFac/>
   </Box>
    )
}

export default LoginHomePage;