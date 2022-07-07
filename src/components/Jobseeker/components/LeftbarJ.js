import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import WarningIcon from '@mui/icons-material/Warning';
import {  Bookmark, List,ExitToApp,Home, Person,PhotoCamera,PlayCircleOutline,Settings,Storefront,TabletMac,} from "@material-ui/icons";
import useStyles from "../../styles";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/actions/auth";
import { useNavigate } from "react-router-dom";

const LeftbarJ = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = ()=>{
    dispatch(logout(navigate))
  }

  return (
    <Container className={classes.container}>
      <div className={classes.item} onClick={()=>navigate('')}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Homepage</Typography>
      </div>
      <div className={classes.item} onClick={()=>navigate('appliedlist')}>
        <Person className={classes.icon} />
        <Typography className={classes.text}>Applied post</Typography>
      </div>
      <div className={classes.item} onClick={()=>navigate('chat')}>
        <List className={classes.icon} />
        <Typography className={classes.text}>Frelance</Typography>
      </div>
      <div className={classes.item} onClick={()=>navigate('notification')}>
        <WarningIcon className={classes.icon} />
        <Typography className={classes.text}>Notification</Typography>
      </div>
      <div className={classes.item} onClick={()=>navigate('videochat')}>
        <PlayCircleOutline className={classes.icon}  />
        <Typography className={classes.text}>Videos</Typography>
      </div>
      <div className={classes.item} onClick={()=>navigate('postservice')}>
        <TabletMac className={classes.icon} />
        <Typography className={classes.text}>post service</Typography>
      </div>
      <div className={classes.item} onClick={()=>navigate('announce')}>
        <Bookmark className={classes.icon} />
        <Typography className={classes.text}>announce</Typography>
      </div>
      <div className={classes.item}>
        <Storefront className={classes.icon} />
        <Typography className={classes.text}>opration</Typography>
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

export default LeftbarJ;