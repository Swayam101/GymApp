import React, { useState } from "react"
import { Box } from "@mui/material"
import Image from '../images/gymImage.jpg'
import BottomFac from "./bottomFacilities"
import axios from "axios"

const boxStyle={
    backgroundImage:`url(${Image})`,
    flexGrow:"1",
    margin:"0px 20px",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center",
    backgroundAttachment:"fixed",
    display:"flex",
    alignItems:"center",
    flexDirection:"column",
    justifyContent:"space-around",
    height:"100vh"
}

const glassMorph={
    position:"sticky",
    backgroundImage:"linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0))",
    backdropFilter: "blur(5px)",
    fontSize:"3.2rem",
    height:"20%",
    display:"flex",
    alignItems:"center",
    padding:"2rem",
    borderRadius:"5%",
    boxShadow:"10px 10px 10px rgba(30,30,30,0.5)",
    color:"white"
}



const MiddleBox=()=>{
  

    const [message,setMessage]=useState("If You're Not Fit You're Nothing")

    const getMessage=()=>{
        axios.get("https://localhost:5500")
        .then(res=>{
            console.log("Recieved Data:",res.data);
        }).catch(err=>{
            console.log("Fetch Error:",err);
        })
    }
    getMessage()

    return (
       <Box bgcolor="green" style={boxStyle}>
        <Box style={glassMorph}>
           {message}
        </Box>
       </Box>
    )
}

export default MiddleBox