import styled from "@emotion/styled";
import { SportsGymnasticsOutlined} from "@mui/icons-material";
import { AppBar, Button, IconButton, InputBase, Typography,Toolbar,Box } from "@mui/material";
import React from "react";

const StyledToolbar=styled(Toolbar)({
    display:"flex",
    justifyContent:"space-around"
})

const flexStyling={
    display:"flex",
    flexDirection:"row",
}

const IconsLeft=styled(Box)(({ theme })=>({
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    alignSelf:"flex-start",
   }))

const GetMembershipNav=()=>{
    return(
        <AppBar position="static">
        <StyledToolbar variant="dense" >
           <IconsLeft>
           <IconButton aria-label="delete" size="large">
                 < SportsGymnasticsOutlined/>
           </IconButton>
           <Typography variant="h6">DumbbellDoor</Typography>
               </IconsLeft> 
          <div className="myFlex" style={flexStyling}>
            <Typography variant="h4">Get/Renew Membeship</Typography>
          </div>
           <Button variant="contained" >Training</Button>
           <Button variant="contained" >Scheduler</Button>
        </StyledToolbar>
       </AppBar>
    )
}

export default GetMembershipNav;