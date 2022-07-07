import React,{useState,useEffect} from "react";
import { Grid, makeStyles,Container,Typography } from "@material-ui/core";
import { Outlet } from "react-router-dom";
import Add from "../../components/Employer/components/AddE";
import Feed from "../../components/Employer/components/FeedE";
import Leftbar from "../../components/Employer/components/LeftbarE";
import Navbar from "../../components/Employer/components/NavbarE";
import Rightbar from "../../components/Employer/components/RightbarE";
import { getPosts } from "../../redux/actions/post";
import { ReadEmployerProfile } from "../../redux/actions/profile";
import { useDispatch,useSelector} from "react-redux";
import {useNavigate,useLocation} from 'react-router-dom'
import FilterApplier from "../../components/Employer/components/Applier/FilterApplier";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const EmployerHome = () => {
  const classes = useStyles();  
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const {accountData} = useSelector((state) => ({accountData:state.ar.accountData}))
  const {loading} = useSelector((state) => ({loading:state.pr.loading}))
  
  
  useEffect(() => {
    accountData.user.is_employer? getData():navigate(-1)
  }, [])
  
  const getData=()=>{
    dispatch(ReadEmployerProfile(accountData.user.id))
  }

  return (
    loading?
    <Container className={classes.container}>
      <Typography >Loading...</Typography> 
     </Container>:
    <>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          {/* <Feed /> */}
          <Outlet />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          {
            location.pathname =='/home/employer/applierlist'?<FilterApplier/>:
            <Rightbar/>            
          }          
        </Grid>
      </Grid>
      <Add />
      
    </>
  );
};

export default EmployerHome;