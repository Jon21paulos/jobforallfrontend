import React,{useEffect,useState} from "react";
import { Container, Button, List,CircularProgress,ListItem,ListItemSecondaryAction } from "@material-ui/core";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useSelector ,useDispatch} from "react-redux";
import useStyles from "../../components/styles";
import {useNavigate,useParams} from "react-router-dom"
import { getChats,getMessages } from "../../redux/actions/chat";
import Message from "./chat/Message";
import MessageForm from "./MessageForm";

function MessageList() {
  
  const classes = useStyles();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {messageId} = useSelector((s) => ({messageId:s.chatReducer.messageId}))
  
  useEffect(() => {
    getData()
  }, [])
  
  const getData=()=>{
    dispatch(getMessages(navigate,messageId))
  }
  
  const {message} = useSelector((s) => ({message:s.chatReducer.messages}))
  console.log(message)
  return(
    <Container className={classes.container}>
       <List   sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
       {
         !message.length ? <CircularProgress /> : (
         <Container >
            
           {message.map((message) => (
             <ListItem key={message.MessageId} >
               <Message message={message}  />

             </ListItem>

           ))}
         </Container>
             )
             
         }
            <MessageForm  messageId={messageId}/>

       </List>
    </Container>
      
  )   
}  


export default MessageList