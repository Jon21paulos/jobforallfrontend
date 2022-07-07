import React,{useState,useEffect} from "react";
import { Grid, makeStyles,Container,Typography } from "@material-ui/core";
import { Outlet } from "react-router-dom";
import LeftbarA from "../../components/admin/LeftbarA";
import RightbarA from "../../components/admin/Rightbar";
import NavbarA from "../../components/admin/NavbarA";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const AdminHome = () => {
  const classes = useStyles();  
  const navigate = useNavigate();
  
  const {accountData} = useSelector((state) => ({accountData:state.ar.accountData}))
  
  
  useEffect(() => {
    accountData.user.is_admin? getData():navigate(-1)
  }, [])
  
  const  getData=()=>{
    console.log('account info',accountData)
  }

  return (
    <>
      <NavbarA/>
      <Grid container>
        <Grid item sm={2} xs={2}>
          <LeftbarA/>
        </Grid>
        <Grid item sm={7} xs={10}>
          <Outlet />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <RightbarA />              
        </Grid>
      </Grid>      
    </>
  );
};

export default AdminHome;