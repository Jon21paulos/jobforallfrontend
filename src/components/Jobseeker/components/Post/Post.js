import React,{useState} from "react";
import { useSelector ,useDispatch} from "react-redux";
import {  Button,Card,CardActionArea,Avatar,IconButton, CardActions,CardContent,CardHeader,makeStyles,Typography,} from "@material-ui/core";
import useStyles from "../../../styles";
import { Alert, Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { applyPost } from "../../../../redux/actions/applier";
import FlagIcon from '@mui/icons-material/Flag';
import { createReport } from "../../../../redux/actions/report";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import BlockIcon from '@mui/icons-material/Block';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { createChat,setChatId } from "../../../../redux/actions/chat";
import { setProfile } from "../../../../redux/actions/profile";
import { removeJob } from "../../../../redux/actions/post";
const Post = ({ post }) => {
  
  const classes = useStyles();
  const {profileData} = useSelector((state) => ({profileData:state.pr.profileData}))
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {accountData} = useSelector((state) => ({accountData:state.ar.accountData}))

  const [open, setOpen] = useState(false);
  const [snackBarOpen, setsnackBarOpen] = useState(false)
  const [reportData, setReportData] = useState(
      { 
          ReportMessage:'',
          reporter:accountData.user.id,
          reported:null,
          
      });
      
  const handleClickOpen = (id) => {
      setOpen(true);  
      setReportData({ ...reportData, reported: id })
  };

  const handleSend = (event) => {
    event.preventDefault();
    setOpen(false);
    dispatch(createReport(navigate,reportData))
  };

  const handleClose = () => {
      setOpen(false);
  };

  const handleSnackClose = ()=>{
    setsnackBarOpen(false)
  }

  const handleApplyPost = (post,EmployerId) =>{
    const applydata = {
      "EmployerId": EmployerId,
      "ApplierId": profileData.user.JobseekerId,
      "PostId": post.JobId
    }
    
    if(post.Title===profileData.user.skills){
      dispatch(removeJob(post.JobId))
      dispatch(applyPost(applydata,navigate))

    }else{
      setsnackBarOpen(true)
    }
    // if(profileData.user)
  }

  const handleFreelancePost = (EmployerId,JobId) =>{
    const chatdata = {
      "is_accepted":false,
      "is_finished":false,
      "is_done":false,
      "JobseekerId": profileData.user.JobseekerId,
      "EmployerId": EmployerId,
      "JobId":JobId,
    }
    dispatch(createChat(navigate,chatdata))
    dispatch(setChatId(EmployerId) )
    navigate(`chat`)

  }
  const handleProfile = (profile) =>{
    dispatch(setProfile(profile))
    navigate(`profileview`)
  }
  return (
    <>
    <Card className={classes.card}>
      <CardActionArea>
      <CardHeader
        avatar={
          <Avatar src={post.user.profile_photo} onClick={()=>handleProfile(post.user)}/>
          }
          
        action={
          <IconButton aria-label="settings" onClick={()=>handleClickOpen(post.user.user)}>
            <FlagIcon/>
          </IconButton>
        }
        title={post.user.company_name}
        subheader={post.user.adderss}
      />

        <CardContent>
          
          <Typography gutterBottom variant="h5">
            {post.Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Description: {post.Description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Job Type: {post.Jobtype}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Salary: {post.Salary}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Address: {post.City}
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        {
          post.is_freelancer?
          <Button size="small" color="primary" onClick={()=>handleFreelancePost(post.user.EmployerId,post.JobId)}>
            apply freelance
          </Button>:
          <Button size="small" color="primary" onClick={()=>handleApplyPost(post,post.user.EmployerId)}>
            apply job
          </Button>
        }
        
      </CardActions>
    </Card>
    
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>report</DialogTitle>
      <DialogContent>
          <DialogContentText>
              send report to admin
          </DialogContentText>
        
          <TextareaAutosize
              margin="normal"
              required
              fullWidth
              id="ReportMessage"
              label="ReportMessage"
              name="ReportMessage"
              autoComplete="ReportMessage"
              autoFocus
              value={reportData.ReportMessage} 
              onChange={(e) => setReportData({ ...reportData, ReportMessage: e.target.value })} 
              maxRows={4}
              aria-label="maximum height"
              placeholder="please enter your message"
              style={{ width: 400 ,height:200}}
          />
      </DialogContent>
      <DialogActions>
          <Button onClick={handleSend}>Send</Button>
          <Button onClick={handleSend}>close</Button>
      </DialogActions>
      </Dialog>
      <Snackbar
        message="oops!! your profile not match"
        autoHideDuration={4000}
        open={snackBarOpen}
        onClose = {handleSnackClose}
      
        anchorOrigin={{
          vertical:'bottom',
          horizontal:'center'
        }}
      >
      </Snackbar>
    </>
  );
};

export default Post;