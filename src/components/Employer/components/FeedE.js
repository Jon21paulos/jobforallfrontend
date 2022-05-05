import React from "react";

import { Container, makeStyles,Grid,CircularProgress, Typography } from "@material-ui/core";
import useStyles from "../../styles";
import { useSelector } from "react-redux";
const FeedE = () => {
  const classes = useStyles();
  
  return (
      <Container className={classes.container}>
        <Typography>
          Employer home page
        </Typography>
      </Container> 
  )
};

export default FeedE;