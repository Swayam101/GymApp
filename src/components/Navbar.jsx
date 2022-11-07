import React, { useState } from "react";
import { AppBar,Toolbar,Typography ,Button,IconButton,InputBase, Menu, MenuItem} from "@mui/material";
import { Box, display } from "@mui/system";
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import styled from "@emotion/styled";
import { Home,LocationOn, ArrowBack } from "@mui/icons-material";
import { Link } from "react-router-dom";

const StyledToolbar=styled(Toolbar)({
    display:"flex",
    justifyContent:"space-around"
})

const Search=styled("div")(({theme})=>({
    background:"rgba(192,192,192,0.5)",
   padding:"0 10px",
   borderRadius:"2%/50%",
   alignSelf:"center",
   padding:"0.1rem",
   boxShadow:"20"
}));

const flexStyling={
    display:"flex",
    flexDirection:"row",
    flexGrow:"0.5"
}

const IconsLeft=styled(Box)(({ theme })=>({
 display:"flex",
 flexDirection:"column",
 alignItems:"center",
 alignSelf:"flex-start",

}))

const Navbar=()=>{
    const [open,setOpen]=useState(false)
    const [anchorEl,setAnchorEl]=useState()
   const recordButton=(e)=>{
    setAnchorEl(e.currentTarget);
    setOpen(true);
   }

    return(
        <AppBar position="static" style={{background:"#FFFFFF"}}>
         <StyledToolbar variant="dense" >
         <IconButton aria-label="delete" size="large">
                  < ArrowBack sx={{fontSize:"3rem"}}/>
            </IconButton>
            <IconsLeft>
            <IconButton aria-label="delete" size="large">
                  < SportsGymnasticsIcon sx={{fontSize:"3rem"}}/>
            </IconButton>
            <Typography variant="h6" style={{color:"black"}}>DumbbellDoor</Typography>
                </IconsLeft> 
           <div className="myFlex" style={flexStyling}>
           <Search style={{flexGrow:"2",color:"black"}}>< InputBase placeholder="Search..." style={{paddingLeft:"0.5rem"}}/></Search>
            <IconButton><LocationOn sx={{fontSize:"3rem"}}/></IconButton>
            <IconButton><Home sx={{fontSize:"3rem"}}/></IconButton>
           </div>
            <Button variant="contained" sx={{fontSize:"1.5rem",paddingLeft:"1rem",background:"#9B9FAC"}} >Training</Button>
            <Button variant="contained" sx={{fontSize:"1.5rem",paddingLeft:"1rem",background:"#9B9FAC"}} >Scheduler</Button>
            <Button variant="contained" sx={{fontSize:"1.5rem",paddingLeft:"1rem",background:"#9B9FAC"}} ><Link to="/getMembership" style={{textDecoration:"none",color:"white"}}>Membership</Link></Button>
            
         </StyledToolbar>
        </AppBar>
    )
}

export default Navbar;