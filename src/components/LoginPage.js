import { Box } from "@mui/system";
import React from "react";
import LoginForm from "./LoginForm";
import manImg from "../images/Man.png";
import bottom from '../images/bottom.png';
import Logo from "./logo";

const styleBox={
    display:'flex',
    flexDirection:'row',
    padding:'0',
}    

const manImageBox={
    height:'65vh',
    flex:'1'
};

const bottomG={    
    width:'100vw',
    height:'14.45rem',
}

const BottomStyleBox={
    justifyContent:'bottom',
}

function LoginPage(){
    
     return (
        <Box>        
        <Logo />
        <Box style={styleBox}>
        <div style={{flex:'1.5'}}><LoginForm /></div>
        <div style={manImageBox}><img src={manImg} /></div>
        </Box>
        <Box style={BottomStyleBox}><img src={bottom} style={bottomG}/></Box>
        </Box>
    );
}

export default LoginPage
