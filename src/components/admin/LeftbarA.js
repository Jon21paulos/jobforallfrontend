import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import {  Bookmark, List,ExitToApp,Home, Person,PhotoCamera,PlayCircleOutline,Settings,Storefront,TabletMac,} from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import useStyles from "../styles";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/auth";

const LeftbarA = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleLogout = ()=>{
    dispatch(logout(navigate))
  }

  return (
    <Container className={classes.container}>
      <div className={classes.item} onClick={()=>navigate('')}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Homepage</Typography>
      </div>
      <div className={classes.item} onClick={()=>navigate('reports')}>
        <Person className={classes.icon} />
        <Typography className={classes.text}>Reports</Typography>
      </div>
      <div className={classes.item} onClick={()=>navigate('notification')}>
        <Person className={classes.icon} />
        <Typography className={classes.text}>notification</Typography>
      </div>
      <div className={classes.item} onClick = {()=>handleLogout()}>
        <ExitToApp className={classes.icon} />
        <Typography className={classes.text}>Logout</Typography>
      </div>
    </Container>
  );
};

export default LeftbarA;