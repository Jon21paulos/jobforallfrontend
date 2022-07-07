import React,{useEffect} from "react";

import { Container, makeStyles,Grid,CircularProgress, Typography } from "@material-ui/core";
import useStyles from "../../styles";
import { useSelector,useDispatch } from "react-redux";
import { getPosts } from "../../../redux/actions/post";
import { useNavigate } from "react-router-dom";
import Vdo from "../../../pages/video/V";
import Vdo1 from "../../../pages/video/v1";
import LineChart from "../../admin/graph/LineChart";

const FeedE = () => {
  const classes = useStyles();
  

  return (
      <Container className={classes.container}>
        <Typography>
          <LineChart/>
        </Typography>
      </Container> 
  )
};

export default FeedE;