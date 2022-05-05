import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import {  Bookmark, List,ExitToApp,Home, Person,PhotoCamera,PlayCircleOutline,Settings,Storefront,TabletMac,} from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import useStyles from "../../styles";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/actions/auth";

const LeftbarE = () => {
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
      <div className={classes.item} onClick={()=>navigate('listjob')}>
        <Person className={classes.icon} />
        <Typography className={classes.text}>List Posted Job</Typography>
      </div>
      <div className={classes.item} onClick={()=>navigate('postjob')}>
        <List className={classes.icon} />
        <Typography className={classes.text}>Post Job</Typography>
      </div>
      <div className={classes.item} onClick={()=>navigate('applierlist')}>
        <PhotoCamera className={classes.icon} />
        <Typography className={classes.text}>applier list</Typography>
      </div>
      <div className={classes.item}>
        <PlayCircleOutline className={classes.icon} />
        <Typography className={classes.text}>Videos</Typography>
      </div>
      <div className={classes.item}>
        <TabletMac className={classes.icon} />
        <Typography className={classes.text}>Apps</Typography>
      </div>
      <div className={classes.item}>
        <Bookmark className={classes.icon} />
        <Typography className={classes.text}>Collections</Typography>
      </div>
      <div className={classes.item}>
        <Storefront className={classes.icon} />
        <Typography className={classes.text}>Market Place</Typography>
      </div>
      <div className={classes.item}>
        <Settings className={classes.icon} />
        <Typography className={classes.text}>Settings</Typography>
      </div>
      <div className={classes.item} onClick = {()=>handleLogout()}>
        <ExitToApp className={classes.icon} />
        <Typography className={classes.text}>Logout</Typography>
      </div>
    </Container>
  );
};

export default LeftbarE;