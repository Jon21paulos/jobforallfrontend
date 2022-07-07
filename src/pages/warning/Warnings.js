import React,{useState,useEffect} from "react";
import { Container, makeStyles,Grid,CircularProgress } from "@material-ui/core";
import { useSelector,useDispatch } from "react-redux";
import useStyles from "../../components/styles";
import {useNavigate} from 'react-router-dom'
import { getWarning } from "../../redux/actions/report";
import Warning from "./Warning";

function Warnings() {
  
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {accountData} = useSelector((state) => ({accountData:state.ar.accountData}))
  
  useEffect(() => {
    dispatch(getWarning(navigate,accountData.user.id))
  }, [])
  
  
  const {warning} = useSelector((s) => ({warning:s.reportReducer.warning}))

  return(
      <>
        <Container className={classes.container}>
        {
          !warning.length ? <CircularProgress /> : (
          <Grid  >
            {warning.map((warning) => (
              <Grid key={warning.warningId} item xs={12} sm={12} md={12} spacing={4}>
                  <Warning warning={warning} />  
              </Grid>
            ))}
            
          </Grid>
              )
          }
        </Container>
      </>
  )   
}  


export default Warnings