import React,{useEffect} from "react";
import { Container, makeStyles,Grid,CircularProgress } from "@material-ui/core";
import { useDispatch ,useSelector} from "react-redux";
import useStyles from "../../../styles";
import { useNavigate } from "react-router-dom";
import { getApplied } from "../../../../redux/actions/applied";
import Applied from "./applied/Applied";

function AppliedList() {
  
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {loading} = useSelector((s) => ({loading:s.appliedR.loading}))
  const {applied} = useSelector((s) => ({applied:s.appliedR.applied}))

  const {profileData} = useSelector((state) => ({profileData:state.pr.profileData}))  


  useEffect(() => {
    getData()
  }, [])
  
  const getData=()=>{
    dispatch(getApplied(navigate,profileData.user.JobseekerId))
  }
  

  console.log("fg",applied)

  return(
      <Container className={classes.container}>
          
      {
        loading ? <CircularProgress /> : (
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {applied.map((applied) => (
            <Grid key={applied.ApplyId} item xs={12} sm={6} md={6}>
              <Applied applied={applied} />
            </Grid>
          ))}
        </Grid>
            )
        }
      </Container> 
  )   
}  

export default AppliedList  