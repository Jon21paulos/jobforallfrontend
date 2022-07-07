import React,{useState} from "react";
import {  ListItemText,Card,CardHeader, Avatar,CardActions,CardContent,CardMedia,makeStyles,Typography, Container,} from "@material-ui/core";

const Announce = ({ notify }) => {

    
    return (        
        <>
         <ListItemText primary="From Employer" secondary={notify.notify} />
        </>
    );
};

export default Announce;