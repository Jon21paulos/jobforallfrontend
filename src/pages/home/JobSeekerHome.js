import React,{useEffect} from "react";
import { CircularProgress, Grid, makeStyles,Container } from "@material-ui/core";
import { Outlet } from "react-router-dom";
import Add from "../../components/Jobseeker/components/AddJ";
import Feed from "../../components/Jobseeker/components/FeedJ";
import Leftbar from "../../components/Jobseeker/components/LeftbarJ";
import Navbar from "../../components/Jobseeker/components/NavbarJ";
import Rightbar from "../../components/Jobseeker/components/RightbarJ";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPosts } from "../../redux/actions/post";
import { ReadJobseekerProfile } from "../../redux/actions/profile";
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
  const {accountData} = useSelector((state) => ({accountData:state.ar.accountData}))
  const {loading} = useSelector((state) => ({loading:state.pr.loading}))

  useEffect(() => {
    accountData.user.is_employer? navigate(-1) : getProfile();
  }, [])

  const getProfile=()=>{
    dispatch(getPosts(navigate))
    dispatch(ReadJobseekerProfile(accountData.user.id))
  }
  return (
    loading?
    <Container className={classes.container}>
      <CircularProgress/>
     </Container>:
    <Container>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Outlet />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <Rightbar />
        </Grid>
      </Grid>
      <Add />
    </Container>
  );
};

export default JobseekerHome;