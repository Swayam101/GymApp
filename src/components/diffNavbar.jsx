import React, { useState } from "react";
import { AppBar,Toolbar,Typography ,Button,IconButton,InputBase, Menu, MenuItem} from "@mui/material";
import { Box, display } from "@mui/system";
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import styled from "@emotion/styled";
import { Home, KeyboardArrowUp,KeyboardArrowDown, LocationCity, LocationOn, SearchOffRounded, SearchOutlined } from "@mui/icons-material";

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

const DiffNavbar=()=>{
    const [open,setOpen]=useState(false)
    const [anchorEl,setAnchorEl]=useState()
   const recordButton=(e)=>{
    setAnchorEl(e.currentTarget);
    setOpen(true);
   }

   return(
        <AppBar style={{background:'#FFFFFF'}}>
        <StyledToolbar variant="dense" >
            <IconsLeft>
            <IconButton aria-label="delete" size="large">
                  < SportsGymnasticsIcon/>
            </IconButton>
            <Typography variant="h6" style={{color:"black"}}>DumbbellDoor</Typography>
                </IconsLeft> 
           <div className="myFlex" style={flexStyling}>
            <SearchOutlined/>
           <Search style={{flexGrow:"2",color:"black"}}>< InputBase placeholder="Search For A Gym....." style={{paddingLeft:"0.5rem"}}/></Search>
            <IconButton><LocationOn sx={{fontSize:"3rem"}} /></IconButton>
            <IconButton><Home sx={{fontSize:"3rem"}}/></IconButton>
           </div>
            <Button variant="contained" sx={{fontSize:"1.5rem",paddingLeft:"1rem"}}>Login</Button>
            <Button variant="contained" sx={{fontSize:"1.5rem",paddingLeft:"1rem"}}>Signup</Button>
            </StyledToolbar>
            </AppBar>
            //#047Df8
            //#00C2CB
    )
}

export default DiffNavbar;