import React,{useEffect} from "react";

import { Container, makeStyles,Grid,CircularProgress, Typography } from "@material-ui/core";
import useStyles from "../styles";
import LineChart from "./graph/LineChart";
const FeedA = () => {
  const classes = useStyles();
  
  return (
      <Container className={classes.container}>
        <LineChart/>
      </Container> 
  )
};

export default FeedA;