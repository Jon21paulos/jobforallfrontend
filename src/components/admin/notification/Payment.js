import React,{useState} from "react";
import { Card,CardActionArea,CardActions,CardContent,CardMedia,makeStyles,Typography,} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import BlockIcon from '@mui/icons-material/Block';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useDispatch } from "react-redux";  
import { useNavigate } from "react-router-dom";
import useStyles from "../../styles";
import { createWarning,deleteReport } from "../../../redux/actions/report";

const Payment = ({ payments }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [warningData, setWarningData] = useState(
        { 
            warnedUser:null,
            warningMessage: ''
        });
        
    const handleClickOpen = (id) => {
        setOpen(true);  
        setWarningData({ ...warningData, warnedUser: id })
    };

    const handleClose = () => {
        setOpen(false);
        // dispatch(createWarning(navigate,warningData))
    };

    const handleSend = () =>{
        dispatch(createWarning(navigate,warningData))
        setOpen(false)
        setWarningData({...warningData,warningMessage:''})
    }

  
    return (
        <>
        
        <Card sx={{ minWidth: 275 }} className={classes.card}>
        <CardContent>
         
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
             employer: {payments.employerId.company_name}   
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
             transfered amount: {payments.payment}ETB 
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
             total salary: {payments.jobId.Salary}ETB
          </Typography>
          <Typography variant="body2">
             job title: {payments.jobId.Title}
          </Typography>

          <Typography variant="body2">
             freelance {payments.freelancerId.name}
          </Typography>

        </CardContent>
        <CardActions>
            <Button variant="outlined" startIcon={<SendIcon />} onClick={()=>handleClickOpen(payments.freelancerId.user)} >
                Send message to freelancer
            </Button>
            <Button  variant="outlined" startIcon={<SendIcon />} onClick={()=>handleClickOpen(payments.employerId.user)} >
                send message to employer
            </Button>
           
        </CardActions>
      </Card>
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>notify user</DialogTitle>
        <DialogContent>
            <DialogContentText>
                notify user
            </DialogContentText>
           
            <TextareaAutosize
                margin="normal"
                required
                fullWidth
                id="warningMessage"
                label="Warning Message"
                name="warningMessage"
                autoComplete="warningMessage"
                autoFocus
                value={warningData.warningMessage} 
                onChange={(e) => setWarningData({ ...warningData, warningMessage: e.target.value })} 
                maxRows={4}
                aria-label="maximum height"
                placeholder="please enter your message"
                style={{ width: 400 ,height:200}}
            />
        </DialogContent>
        <DialogActions>
            <Button onClick={handleSend}>Send</Button>
            <Button onClick={handleClose}>close</Button>

        </DialogActions>
        </Dialog>
        </>
    );
};

export default Payment;