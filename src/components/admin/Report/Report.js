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

const Report = ({ report }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [warningData, setWarningData] = useState(
        { 
            warnedUser:0,
            warningMessage: ''
        });
        
    const handleClickOpen = (report) => {
        setOpen(true);  
        setWarningData({ ...warningData, warnedUser: report.reported.id })
    };

    const handleClose = (event) => {
        event.preventDefault();
        setOpen(false);
        dispatch(createWarning(navigate,warningData))
    };

    const handleDelete = (id) =>{
        dispatch(deleteReport(navigate,id))
    }

    const handleWarning = (id) =>{
        
    }
    const handleBlock = (id) =>{
        
    }
    return (
        <>
        
        <Card sx={{ minWidth: 275 }} className={classes.card}>
        <CardContent>
         
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
          reported from {report.reporter.username}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
          reported to {report.reported.username}
          </Typography>
          
          <Typography variant="body2">
            {report.ReportMessage}
          </Typography>
        </CardContent>
        <CardActions>
            <Button variant="outlined" startIcon={<SendIcon />} onClick={()=>handleClickOpen(report)} >
                Send warning
            </Button>
            <Button  variant="outlined" startIcon={<ThumbDownIcon />}  onClick={()=>handleDelete(report.reportId)}>
                Reject report
            </Button>
            <Button  variant="outlined" startIcon={<BlockIcon />}  onClick={()=>handleBlock(report.reportId)}>
                Block user
            </Button>
        </CardActions>
      </Card>
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>notify user</DialogTitle>
        <DialogContent>
            <DialogContentText>
                you send message to user {report.reported.username}
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
            <Button onClick={handleClose}>Send</Button>
        </DialogActions>
        </Dialog>
        </>
    );
};

export default Report;