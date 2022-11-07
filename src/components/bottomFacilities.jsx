import { Assignment } from "@mui/icons-material";
import { Avatar, Stack, Tooltip, Zoom } from "@mui/material";
import React from "react";
import image1 from '../images/fac1.jpg'
import image2 from '../images/fac2.jpg'
import image3 from '../images/fac3.jpg'
import image4 from '../images/fac4.jpg'

const stackStyle={
    height:"25.8vh",
    justifyContent:"space-around",
    flexDirection:"row",
    alignItems:"center",
    width:"100%",
    marginBottom:"20px"
}

const avtarStyle={
    margin:"0",
    height:"12rem",
    width:"28rem",
    "&:hover":{
        backdropFilter:"blur(20px)"
    }
}

const toolTipStyling={
    fontSize:"2rem",
    padding:"1rem",
}

const ToolTip=(props)=>{
     return(
        <p style={toolTipStyling}>{props.text}</p>
     )
}

const BottomFac=()=>{
    return(
        <Stack style={stackStyle}>
       <Tooltip title={<ToolTip text="Power Yoga"/>} TransitionComponent={Zoom}><Avatar variant="square" style={avtarStyle} src={image1}><Assignment/></Avatar></Tooltip>
       <Tooltip title={<ToolTip text="CrossFit"/>} TransitionComponent={Zoom}><Avatar variant="square" style={avtarStyle} src={image2}><Assignment/></Avatar></Tooltip>
       <Tooltip title={<ToolTip text="Powerlifting"/>} TransitionComponent={Zoom}><Avatar variant="square" style={avtarStyle} src={image3}><Assignment/></Avatar></Tooltip>
       <Tooltip title={<ToolTip text="Bodybuilding"/>} TransitionComponent={Zoom}><Avatar variant="square" style={avtarStyle} src={image4}><Assignment/></Avatar></Tooltip>
        </Stack>
    )
}

export default BottomFac;