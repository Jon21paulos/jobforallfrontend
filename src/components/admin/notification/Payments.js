import React,{useState,useEffect} from "react";
import { Pagination } from "@mui/material";
import { Container, makeStyles,Grid,CircularProgress } from "@material-ui/core";
import { useSelector,useDispatch } from "react-redux";
import useStyles from "../../styles";
import {useNavigate} from 'react-router-dom'
import { getPayment } from "../../../redux/actions/payment";
import Payment from "./Payment";

function Payments() {
  
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  useEffect(() => {
    dispatch(getPayment(navigate))
  }, [])
  

  
  const {payments} = useSelector((state) => ({payments:state.paymentReducer.payments}))  

  return(
      <>
        <Container className={classes.container}>
        {
          !payments.length ? <CircularProgress /> : (
          <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {payments.map((payments) => (
              <Grid key={payments.paymentId} item xs={12} sm={12} md={12}>
                  <Payment payments={payments} />  
              </Grid>
            ))}
          </Grid>
              )
          }
        </Container>
      </>
  )   
}  


export default Payments