import React,{useState} from "react";
import { Card,Container, TextField,CardHeader,Avatar, CardActions,CardContent,CardMedia,makeStyles,Typography} from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FeedbackIcon from '@mui/icons-material/Feedback';
import PaymentsIcon from '@mui/icons-material/Payments';
import { useDispatch,useSelector } from "react-redux"; 
import IconButton from '@mui/material/IconButton';
import { useNavigate } from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FlagIcon from '@mui/icons-material/Flag';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import BlockIcon from '@mui/icons-material/Block';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import useStyles from "../../../components/styles";
import { deleteChat } from "../../../redux/actions/chat";
import { createReport } from "../../../redux/actions/report";
import { createTestimonial,createRating } from "../../../redux/actions/feedback";
import { setPayment } from "../../../redux/actions/payment"; 
import { setProfile } from "../../../redux/actions/profile";
import { updateChat } from "../../../redux/actions/chat";
import { filterReadPayment } from "../../../redux/actions/payment";
import { setChats } from "../../../redux/actions/chat";

const Chat = ({ chat,handleClick }) => {

    const {accountData} = useSelector((state) => ({accountData:state.ar.accountData}))
    const classes = useStyles()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {payments} = useSelector((state) => ({payments:state.paymentReducer.payments}))  

    const [value, setValue] = useState(30);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const [open, setOpen] = useState(false);
    const [isfeedback, setisfeedback] = useState(true)
    const [reportData, setReportData] = useState(
        { 
            ReportMessage:'',
            reporter:accountData.user.id,
            reported:null,
            
        });
        
    const [testimonialData, setTestimonialData] = useState(
        { 
            testimonial: "",
            jobseekerId: null,
            employerId: null
            
        });    
    const [ratingData, setRatingData] = useState(
            { 
                rating: null,
                jobseekerId: null,
                employerId: null
                
            }); 

    const handleClickOpen = (id) => {
        setOpen(true);  
        setisfeedback(false);
        setReportData({ ...reportData, reported: id })
    };
  
    const handleSend = (event) => {
        event.preventDefault();
        setOpen(false);
        dispatch(createReport(navigate,reportData))
    };

    const handleClose = () => {
        setOpen(false);
        setisfeedback(true);
    };

    const handleDelete = (id) =>{
        dispatch(deleteChat(navigate,id))
    }

    const handleAccept = (chat) =>{
        const form = {
            "freelancerId": chat.JobseekerId.JobseekerId,
            "employerId": chat.EmployerId.EmployerId,
            "jobId": chat.JobId.JobId,
            "chatId": chat.ChatId
        }
        dispatch(setChats(navigate,chat))
        dispatch(setPayment(form))
        navigate(`verification`)
    }
    const handleFullPayment = (chat) =>{
        const form = {
            "freelancerId": chat.JobseekerId.JobseekerId,
            "employerId": chat.EmployerId.EmployerId,
            "jobId": chat.JobId.JobId,
            "chatId": chat.ChatId
        }
        dispatch(setChats(navigate,chat))
        dispatch(setPayment(form))
        dispatch(filterReadPayment(chat.JobseekerId.JobseekerId,chat.EmployerId.EmployerId,chat.JobId.JobId))    
        navigate(`fullpayment`)

    }
    const handleDone = (chat) =>{
        const formData = {
            "is_accepted": true,
            "is_finished": true,
            "JobseekerId": chat.JobseekerId.JobseekerId,
            "EmployerId": chat.EmployerId.EmployerId,
            "JobId": chat.JobId.JobId
          }
          dispatch(updateChat(chat.ChatId,formData,navigate))
    }
    const handleFeedback =(chat)=>{
        setOpen(true);  
        setTestimonialData({ ...testimonialData,employerId : chat.EmployerId.EmployerId })
        setRatingData({ ...ratingData,employerId : chat.EmployerId.EmployerId })
    }

    const handleTestimonial = () =>{
        dispatch(createTestimonial(navigate,testimonialData))
    }
    const handleRating = () =>{
        dispatch(createRating(navigate,ratingData))
    }
    const handleProfile = (profile) =>{
        dispatch(setProfile(profile))
        navigate(`profileview`)
    }
    
    return (
          
     <>
     <Card sx={{ minWidth: 275 }} className={classes.card}>

        {
          accountData.user.is_employer?
          <CardHeader
            avatar={
               <Avatar src={chat.JobseekerId.profile_photo} onClick={()=>handleProfile(chat.JobseekerId)}/>
             }
             action={
               <IconButton aria-label="settings" onClick={()=>handleClickOpen(chat.JobseekerId.user)}>
                 <FlagIcon />
               </IconButton>
             }
             title={chat.JobseekerId.name}
             subheader={chat.created_at}
           
           />:
           <CardHeader
            avatar={
                <Avatar src={chat.EmployerId.profile_photo} />
            }
            action={
                <IconButton 
                    aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
            }
            title={chat.EmployerId.company_name}
            subheader={chat.created_at}
            
            />  
        }       
        <CardContent>
         {
             chat.JobId != null?
             <Button  onClick={()=>handleClick(chat)}>
                {
                    accountData.user.is_employer?
                    <Typography>
                        contact freelancer
                    </Typography>:
                    <Typography>
                         contact employer
                    </Typography>
                            
                }
            </Button>:
            <Button  onClick={()=>handleClick(chat)}>
            {
                    <Typography>
                        read message
                    </Typography>
                            
                }
            </Button>
             
         }
             
        {
            accountData.user.is_employer?
            chat.is_finished?
            chat.is_done?
            <Typography>
                thank you 
            </Typography>:
            <Typography>
                your project is done make full payment in order to recieve your project
            </Typography>:
            chat.is_accepted?
             <Typography>
                your project on progress
             </Typography>:null
             :null
        }
        
        {
            accountData.user.is_employer?
            null:
            chat.is_finished?
            chat.is_accepted?
                    <Typography >
                        well done your payment is on progress...
                    </Typography>
                    :
                    null
            :
            chat.is_accepted?
            <Typography >
                you can start project
             </Typography>:
             null
         }         
        </CardContent>
        {
             chat.JobId != null?
             <CardActions>
          
             {
                 accountData.user.is_employer?
                 <>   
                     {
                        chat.is_accepted?
                        null:
                        <Container>
                            <Button variant="outlined" startIcon={<ThumbUpIcon />} onClick={()=>handleAccept(chat)} >
                                Accept freelancer
                            </Button>
                            <Button  variant="outlined" startIcon={<ThumbDownIcon />}  onClick={()=>handleDelete(chat.ChatId)}>
                                Reject freelancer
                            </Button>
                        </Container>

                     }
                    
                     {
                        chat.is_finished?                        
                        chat.is_done?
                        <Button  variant="outlined" startIcon={<FeedbackIcon />}  onClick={()=>handleFeedback(chat)}>
                          Feedback
                        </Button>
                        :
                        <Button  variant="outlined" startIcon={<PaymentsIcon />}  onClick={()=>handleFullPayment(chat)}>
                        make full payment 
                        </Button>
                    
                        :null
                     }
                     
                 </>:
                <>
                 { 
                    chat.is_finished?
                    null:
                    chat.is_accepted?
                    <Button variant="outlined" startIcon={<ThumbUpIcon />} onClick={()=>handleDone(chat)} >
                        click me if your done project
                    </Button>:null
                 }
                </>
             }
             
          </CardActions>:
             null
        }
        
      </Card>
    
     <Dialog open={open} onClose={handleClose}>
         {
             isfeedback?
             <DialogTitle>feedback</DialogTitle>:
             <DialogTitle>report</DialogTitle>
         }
       <DialogContent>
           {
            isfeedback?
            <>
            <DialogContentText>
                send feedback to freelancer
           </DialogContentText>
         
           <TextareaAutosize
               margin="normal"
               required
               fullWidth
               id="Testimonial"
               label="Testimonial"
               name="Testimonial"
               autoComplete="Testimonial"
               autoFocus
               value={testimonialData.testimonial} 
               onChange={(e) => setTestimonialData({ ...testimonialData, testimonial: e.target.value,jobseekerId:chat.JobseekerId.JobseekerId })} 
               maxRows={4}
               aria-label="maximum height"
               placeholder="please enter your testimonial"
               style={{ width: 400 ,height:200}}
           />
            <Button onClick={handleTestimonial}>send tesimonial</Button>
            <TextField 
                id="outlined-basic" 
                label="rate out of 100" 
                fullWidth
                variant="outlined" 
                type='number'
                value={ratingData.rating} 
                onChange={(e) => setRatingData({ ...ratingData, rating: e.target.value,jobseekerId:chat.JobseekerId.JobseekerId })} 
                 
             />

            <Button onClick={handleRating}>Rate</Button>
            </>
            :
            <>
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
            </>
           }
           
       </DialogContent>
       <DialogActions>
           {
               isfeedback?
                 null:
                <Button onClick={handleSend}>Send</Button>

           }
           
           <Button onClick={handleClose}>close</Button>

       </DialogActions>
       </Dialog>
       
     </>
             
    );
};

export default Chat;