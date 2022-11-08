import { Box } from "@mui/system";
import React from "react";
import SignupForm from "./SignupForm";
import manImg from "../images/Man.png";
import bottom from '../images/bottom.png';
import Logo from './logo';

const styleBox={
    display:'flex',
    flexDirection:'row',
    padding:'0',
}    

const manboxstyle={
    height:'65vh',
    flex:'1'
};
const bottomstyle={    
    width:'100vw',
    height:'14.45rem',
}

const BottomStyleBox={
    justifyContent:'bottom',
    width: '1440px',
    left: '0px',
    top: '665.5px',
}

function SignUpPage(){
     return (
        <Box>
        <Logo />
        <Box style={styleBox}>
        <div style={{flex:'1.5'}}><SignupForm/></div>
        <div style={manboxstyle}><img src={manImg} /></div>
        </Box>
        <Box style={BottomStyleBox}><img src={bottom} style={bottomstyle}/></Box>
        </Box>
    );
}

export default SignUpPage
