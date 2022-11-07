import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import '../App.css'
const stackStyle={
     flexDirection:"row",
     justifyContent:"space-around",
     marginTop:"3rem"
}

const cardStyle={
    borderRadius:"10%"
}

const MemOptions=()=>{
    return(
        <Stack style={stackStyle}>
        <Card style={cardStyle} className="cardHovering">
            <CardMedia 
            component="img"
            height="170"
            image="https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400"
            ></CardMedia>
            <CardContent>
                <Typography variant="h4">
                3 Months Plan
                </Typography>
                <Typography variant="h6">$3000</Typography>
            
            </CardContent>
        </Card>
        <Card style={cardStyle} className="cardHovering">
            <CardMedia
            component="img"
            height="170" 
            image="https://images.unsplash.com/photo-1621750627159-cf77b0b91aac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym9keWJ1aWxkZXJ8ZW58MHx8MHx8&w=1000&q=80"
            ></CardMedia>
            <CardContent>
                <Typography variant="h4">
                6 Months Plan
                </Typography>
                <Typography variant="h6">$3000</Typography>
            </CardContent>
        </Card>
        <Card style={cardStyle} className="cardHovering">
            <CardMedia 
            component="img"
            height="170"
            image="https://thumbs.dreamstime.com/b/muscular-bodybuilder-guy-doing-exercises-dumbbell-dumbbells-over-black-background-39531796.jpg"></CardMedia>
            <CardContent>
                <Typography variant="h4">
                1 Year Plan
                </Typography>
                <Typography variant="h6">$3000</Typography>
            </CardContent>
        </Card>
        </Stack>
    )
}

export default MemOptions;