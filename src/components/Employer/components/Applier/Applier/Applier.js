import React,{useState,useEffect} from "react";
import { Card,TextField,CardActionArea,Box, CardHeader,Avatar, CardActions,CardContent,Button,Typography} from "@mui/material";
import { useDispatch,useSelector } from "react-redux";  
import useStyles from "../../../../styles";
import { useNavigate } from "react-router-dom";
import { getVchat,resetVchat, } from "../../../../../redux/actions/vchat";
import { setProfile } from "../../../../../redux/actions/profile";
import { deleteApplier } from "../../../../../redux/actions/applier";
import { createNotify } from "../../../../../redux/actions/report";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextareaAutosize from '@mui/material/TextareaAutosize';

const Applier = ({ applier,handleChange }) => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const {profileData} = useSelector((state) => ({profileData:state.pr.profileData}))  
    const [notifyData, setNotifyData] = useState(
      { 
          notify: "",
          notifier: null,
          notified: null
      });

    const handleVideochat =(id)=>{
       
        navigate(`videochat/${id}`)
    }

    useEffect(() => {
        dispatch(resetVchat())
      }, [])
   
    const handleClickOpen = (id) => {
        setOpen(true);  
        setNotifyData({ ...notifyData, notifier: profileData.user.EmployerId, notified: id })
      };

    const handleProfile = (profile) =>{
        dispatch(setProfile(profile))
        navigate(`profileview`)
    }
    
    const handleReject = (id) =>{
        dispatch(deleteApplier(id))
    }

    const handleClose = (event) => {
      event.preventDefault();
      setOpen(false);
    };

    const handleNotify = () =>{
      dispatch( createNotify(navigate,notifyData) )
      setOpen(false);

    }

    return (
      <>
      <Card className={classes.card}>
        <CardActionArea>
        <CardHeader
            avatar={
                <Avatar src={applier.ApplierId.profile_photo} onClick={()=>handleProfile(applier.ApplierId)} />
                }
            title={applier.ApplierId.name}
            subheader={applier.ApplierId.phone}
          />
        <CardContent>
            <Typography variant="body2">
                {applier.PostId.Title}
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            
            <Button size="small" color="primary" onClick={()=>handleVideochat(applier.ApplierId.JobseekerId)}>
               video chat
            </Button>
            <Button size="small" color="primary" onClick={()=>handleReject(applier.ApplyId)}>
               Reject 
            </Button>
            <Button size="small" color="primary" onClick={()=>handleClickOpen(applier.ApplierId.JobseekerId)}>
               Notify
            </Button>
        </CardActions>
        </Card>
         <Dialog open={open} onClose={handleClose}>
         <DialogTitle>notify user</DialogTitle>
         <DialogContent>
             <DialogContentText>
                 you send notification to applicant
             </DialogContentText>
            
             <TextareaAutosize
                 margin="normal"
                 required
                 fullWidth
                 id="notifyMessage"
                 label="notifyMessage"
                 name="notifyMessage"
                 autoComplete="notifyMessage"
                 autoFocus
                 value={ notifyData.notify} 
                 onChange={(e) => setNotifyData({ ...notifyData, notify: e.target.value })} 
                 maxRows={4}
                 aria-label="maximum height"
                 placeholder="please enter your message"
                 style={{ width: 400 ,height:200}}
             />
         </DialogContent>
         <DialogActions>
             <Button onClick={handleNotify}>Send</Button>
         </DialogActions>
         </Dialog>
      </>
    );
};

export default Applier;