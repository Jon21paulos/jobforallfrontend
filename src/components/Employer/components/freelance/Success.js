import React,{useEffect} from 'react'
import { Container,Typography } from "@material-ui/core";
import useStyles from "../../../styles";
import { useSelector,useDispatch } from 'react-redux'
import { createPayment } from "../../../../redux/actions/payment";
import { Button } from '@mui/material';
import { updateChat } from '../../../../redux/actions/chat';
import { useNavigate } from 'react-router-dom';
function Success() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const myKeysValues = window.location.search;
  const urlPrams = new URLSearchParams(myKeysValues)
  var param1 = urlPrams.get('TotalAmount')
  // const param2 = urlPrams.get('Status')
  const {paymentData} = useSelector((state) => ({paymentData:state.paymentReducer.paymentData}))  
  const {chat} = useSelector((s) => ({chat:s.chatReducer.chat}))

  useEffect(() => {
    const form = {
      "payment": param1,
      "is_fullpayment":false,
      "freelancerId": paymentData.freelancerId,
      "employerId": paymentData.employerId,
      "jobId": paymentData.jobId,
      "chatId":paymentData.chatId
    }
    const form1 = {
      "payment": param1,
      "is_fullpayment":true,
      "freelancerId": paymentData.freelancerId,
      "employerId": paymentData.employerId,
      "jobId": paymentData.jobId,
      "chatId":paymentData.chatId
    }
    const chatform = {
      "is_accepted": true,
      "is_finished": false,
      "is_done": false,
      "JobseekerId": paymentData.freelancerId,
      "EmployerId": paymentData.employerId,
      "JobId": paymentData.jobId
    }
    const chatform1 = {
      "is_accepted": true,
      "is_finished": true,
      "is_done": true,
      "JobseekerId": paymentData.freelancerId,
      "EmployerId": paymentData.employerId,
      "JobId": paymentData.jobId
    }
    if(param1 === "400.00"){
      dispatch(updateChat(paymentData.chatId,chatform,navigate))
      dispatch(createPayment(form))
    }else{
      dispatch(createPayment(form1))
      dispatch(updateChat(paymentData.chatId,chatform1,navigate))

    }   
   
  }, [])
  
  return (
    <Container className={classes.container}>
      <Typography variant="h5">
          you successfully paid {param1} ETB
      </Typography>
      <Button></Button>
    </Container>
  )
}

export default Success