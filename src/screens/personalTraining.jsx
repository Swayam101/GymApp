import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react"
import PtNav from "../components/ptNav"
import RecipeReviewCard from "../components/trainerCard";

const boxStyle={
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    height:"80vh",
}

const Pt=()=>{
    return(
        <>
        <PtNav/>
        <Box style={boxStyle}>
        <Box>
        <RecipeReviewCard/>
        <Button variant="outlined" style={{marginTop:"5rem"}}>Get Diet</Button>
        </Box>
        </Box>
        
        </>
    )
}

export default Pt;