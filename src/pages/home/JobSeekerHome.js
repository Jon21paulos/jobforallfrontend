import React,{useEffect} from "react";
import { CircularProgress, Grid, makeStyles,Container } from "@material-ui/core";
import { Outlet } from "react-router-dom";
import Add from "../../components/Jobseeker/components/AddJ";
import Feed from "../../components/Jobseeker/components/FeedJ";
import Leftbar from "../../components/Jobseeker/components/LeftbarJ";
import Navbar from "../../components/Jobseeker/components/NavbarJ";
import Rightbar from "../../components/Jobseeker/components/RightbarJ";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate,useLocation } from "react-router-dom";
import { getPosts } from "../../redux/actions/post";
import { ReadJobseekerProfile } from "../../redux/actions/profile";
import FilterPost from "../../components/Jobseeker/components/Post/FilterPost";
import io from "socket.io-client"
import { createVchat,deleteVChat,getVchat } from "../../redux/actions/vchat";

const socket = io.connect('http://localhost:5000')

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const JobseekerHome = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const {accountData} = useSelector((state) => ({accountData:state.ar.accountData}))
  const {loading} = useSelector((state) => ({loading:state.pr.loading}))

  const page = 1;
  const path = 'user=&Title=&Deadline=&Jobtype=&Salary=&City=&Description=&is_freelancer=&is_visible=true';

  useEffect(() => {
    accountData.user.is_employer? navigate(-1) : getProfile();
    // loading? setLoading():getVchat();
  }, [])

  const setLoading = () =>{
    console.log('loading...')
  }
  
  
  const getProfile=()=>{
    dispatch(getPosts(navigate,page,path))
    dispatch(ReadJobseekerProfile(accountData.user.id))
  }
  return (
    loading?
    <Container className={classes.container}>
      <CircularProgress/>
     </Container>:
    <>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Outlet />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          {
            location.pathname =='/home/jobseeker'?<FilterPost/>:
            <Rightbar/>            
          } 
        </Grid>
      </Grid>
      <Add />
    </>
  );
};

export default JobseekerHome;