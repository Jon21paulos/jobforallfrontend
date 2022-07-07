import React,{useEffect,useState} from "react";
import { Container, makeStyles,Grid,CircularProgress } from "@material-ui/core";
import { useDispatch ,useSelector} from "react-redux";
import useStyles from "../../../styles";
import {getApplier,setApplier} from '../../../../redux/actions/applier'
import { useNavigate } from "react-router-dom";
import Applier from "./Applier/Applier";
import { Pagination } from "@mui/material";

function ApplierList() {
  
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const page = 1;
  const {loading} = useSelector((s) => ({loading:s.applierR.loading}))
  const {applier} = useSelector((s) => ({applier:s.applierR.applier.results}));
  const {count} = useSelector((s) => ({applier:s.applierR.applier.count}));

  const {profileData} = useSelector((state) => ({profileData:state.pr.profileData}))  


  useEffect(() => {
    getData()
  }, [])
  
  const getData=()=>{
    dispatch(getApplier(navigate,profileData.user.EmployerId,'',page))
  }
  
  const handleChange= async (event,page)=>{
    dispatch(getApplier(navigate,profileData.user.EmployerId,'',page))
  }



  return(
      <Container className={classes.container}>
          
      {
        loading ? <CircularProgress /> : (
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {applier.map((applier) => (
            <Grid key={applier.ApplyId} item xs={12} sm={6} md={6}>
              <Applier applier={applier} />
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

export default ApplierList