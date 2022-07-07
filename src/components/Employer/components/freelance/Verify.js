import React,{useEffect,useState} from "react";
import { Container, Box,Grid, CircularProgress } from "@material-ui/core";
import { Typography ,TextField,FormControlLabel,Button} from '@mui/material';
import useStyles from "../../../styles";
import { useDispatch,useSelector } from "react-redux";
import { ReadPayment, } from "../../../../redux/actions/payment";

const Verify = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const {chat} = useSelector((s) => ({chat:s.chatReducer.chat}))

  const [payData, setPayData] = useState(
    { 
      process: '', merchantOrderId: '', merchantId: '', ipnUrl: '',
      successUrl:'',cancelUrl:'',itemId:'',itemName:'',unitPrice:'',quantity:''
    });
  const {payment} = useSelector((state) => ({payment:state.paymentReducer.payment}))  

  useEffect(() => {
    setPayData(payment)
  }, [])
  

  return (
      <Container className={classes.container}>
        <Typography variant="h5">
          you have to pay 1/3 to system admin in order to start project
        </Typography>
        <Box component="form" method="post" action="https://test.yenepay.com/" noValidate sx={{ mt: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
          <TextField type="hidden" name="Process" value={payData.process} label="set price" variant="standard"/>
          <TextField type="hidden" name="MerchantOrderId" value={payData.merchantOrderId} label="set price" variant="standard"/>
          <TextField type="hidden" name="MerchantId" value={payData.merchantId} label="set price" variant="standard"/>
          <TextField type="hidden" name="IPNUrl" value={payData.ipnUrl} label="set price" variant="standard"/>
          <TextField type="hidden" name="SuccessUrl" value={payData.successUrl} label="set price" variant="standard"/>
          <TextField type="hidden" name="CancelUrl" value={payData.cancelUrl} label="set price" variant="standard"/>
          <TextField type="hidden" name="ItemId" value={payData.ipnUrl} label="set price" variant="standard"/>
          <TextField type="hidden" name="ItemName" value={payData.itemName} label="set price" variant="standard"/>

            <TextField
              required
              type="number"
              name="UnitPrice"
              value={Math.round(chat.JobId.Salary/3)}
              // onChange={(e) => setPayData({ ...payData, UnitPrice: e.target.value })} 
              variant="standard"
            />
            <TextField type="hidden" name="Quantity" value={payData.quantity} label="set price" variant="standard"/>
          </Grid>
           
          <Grid item xs={12} sm={6}>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                // onClick={}
              >
                Pay
              </Button>
          </Grid>
        </Grid>
      </Box>
        
      </Container> 
  )
};

export default Verify;