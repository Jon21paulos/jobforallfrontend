import React,{useState} from "react";
import {  ListItemText,Card,CardHeader, Avatar,CardActions,CardContent,CardMedia,makeStyles,Typography, Container,} from "@material-ui/core";
import useStyles from "../../components/styles";

const Warning = ({ warning }) => {

    const classes = useStyles();
    
    return (        
        <>
         <ListItemText primary="From Admin" secondary={warning.warningMessage} />
        </>
    );
};

export default Warning;