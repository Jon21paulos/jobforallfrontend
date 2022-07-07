import React,{useState,useEffect} from "react";
import { Container, makeStyles,Grid,CircularProgress } from "@material-ui/core";
import { useSelector,useDispatch } from "react-redux";
import useStyles from "../../../styles";
import {useNavigate} from 'react-router-dom'
import { readNotify } from "../../../../redux/actions/report";
import Announce from "./Announce";

function AnnounceList() {
  
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {accountData} = useSelector((state) => ({accountData:state.ar.accountData}))
  const {profileData} = useSelector((state) => ({profileData:state.pr.profileData}))  

  useEffect(() => {
    dispatch(readNotify(navigate,'',profileData.user.JobseekerId))
  }, [])
  
  
  const {notify} = useSelector((s) => ({notify:s.reportReducer.notify}))

  return(
      <>
        <Container className={classes.container}>
        {
          !notify.length ? <CircularProgress /> : (
          <Grid  >
            {notify.map((notify) => (
              <Grid key={notify.NotifyId} item xs={12} sm={12} md={12} spacing={4}>
                  <Announce notify={notify} />  
              </Grid>
            ))}
            
          </Grid>
              )
          }
        </Container>
      </>
  )   
}  


export default AnnounceList