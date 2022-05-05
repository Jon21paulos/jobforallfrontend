import React,{useEffect,useState} from "react";
import { Container, makeStyles,Grid,CircularProgress } from "@material-ui/core";
import { useDispatch ,useSelector} from "react-redux";
import useStyles from "../../../styles";
import {getApplier,setApplier} from '../../../../redux/actions/applier'
import { useNavigate } from "react-router-dom";
import Applier from "./Applier/Applier";

function ApplierList() {
  
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {loading} = useSelector((s) => ({loading:s.applierR.loading}))
  const {applier} = useSelector((s) => ({applier:s.applierR.applier}));

  const {profileData} = useSelector((state) => ({profileData:state.pr.profileData}))  


  useEffect(() => {
    getData()
  }, [])
  
  const getData=()=>{
    dispatch(getApplier(navigate,profileData.user.EmployerId))
  }
  
  const handleChange = (e) =>{
    const {name, checked} = e.target;
    console.log("name",checked)
    let tempApplier = applier.map((ap)=>
      ap.ApplyId === name ? {...ap,isChecked: checked}: ap
    );
    dispatch(setApplier(tempApplier));
    console.log("jobani",tempApplier)

  }   


  console.log("fg",applier)

  return(
      <Container className={classes.container}>
          
      {
        loading ? <CircularProgress /> : (
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {applier.map((applier) => (
            <Grid key={applier.ApplyId} item xs={12} sm={6} md={6}>
              <Applier handleChange={handleChange} applier={applier} />
            </Grid>
          ))}
        </Grid>
            )
        }
      </Container> 
  )   
}  

export default ApplierList