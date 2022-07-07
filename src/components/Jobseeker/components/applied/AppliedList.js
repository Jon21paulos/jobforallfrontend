import React,{useEffect} from "react";
import { Container, makeStyles,Grid,CircularProgress } from "@material-ui/core";
import { useDispatch ,useSelector} from "react-redux";
import useStyles from "../../../styles";
import { useNavigate } from "react-router-dom";
import { getApplier } from "../../../../redux/actions/applier";
import Applied from "./applied/Applied";
import { Pagination } from "@mui/material";

function AppliedList() {
  
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {applied} = useSelector((s) => ({applied:s.applierR.applier.results}))
  const {count} = useSelector((s) => ({count:s.applierR.applier.count}))

  const page = 1;
  const {profileData} = useSelector((state) => ({profileData:state.pr.profileData}))  


  useEffect(() => {
    getData()
  }, [])
  
  const getData=()=>{
    dispatch(getApplier(navigate,'',profileData.user.JobseekerId,page))
  }
  
  const handleChange= async (event,page)=>{
    dispatch(getApplier(navigate,'',profileData.user.JobseekerId,page))
  }

  return(
      <Container className={classes.container}>
          
      {
        !applied? <CircularProgress /> : (
        <Grid container alignItems="stretch" spacing={3}>
          {applied.map((applied) => (
            <Grid key={applied.ApplyId} item xs={12} sm={6} md={6}>
              <Applied applied={applied} />
            </Grid>
          ))}
           <Pagination
              count={Math.ceil(count/10)}
              onChange={handleChange}
            />
        </Grid>
            )
        }
      </Container> 
  )   
}  

export default AppliedList  