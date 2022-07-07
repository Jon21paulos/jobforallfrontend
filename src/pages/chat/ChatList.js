import React,{useEffect,useState} from "react";
import { Container, Typography, List,CircularProgress,ListItem } from "@material-ui/core";
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import { useSelector ,useDispatch} from "react-redux";
import useStyles from "../../components/styles";
import {useNavigate,useParams} from "react-router-dom"
import { getChats,getMessages,setChats,setMessageId } from "../../redux/actions/chat";
import Chat from "./chat/Chat";
import Message from "./chat/Message";
import MessageForm from "./MessageForm";
import { ReadPayment ,getPayment} from "../../redux/actions/payment";

function ChatList() {
  
  const classes = useStyles();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {chatId} = useSelector((s) => ({chatId:s.chatReducer.chatId}))
  const {profileData} = useSelector((state) => ({profileData:state.pr.profileData}))
  const {accountData} = useSelector((state) => ({accountData:state.ar.accountData}))

  useEffect(() => {
    getData()
    dispatch(ReadPayment())


  }, [])
  
  const getData=()=>{
    
    if(accountData.user.is_employer){
      dispatch(getChats(navigate,'',profileData.user.EmployerId))
    }else{
      dispatch(getChats(navigate,profileData.user.JobseekerId,''))
    }
  }

  const handleClick = (chat) =>{
    dispatch(setChats(navigate,chat))
    dispatch(setMessageId(chat.ChatId))
    navigate(`message`)
  }

  

  const {chat} = useSelector((s) => ({chat:s.chatReducer.chats}))
  
  console.log('your message',chat)

  return(
    <>
       <List className={classes.container}  sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
       {
         !chat.length ? <CircularProgress /> : (
         <Container >
           {
             accountData.user.is_employer?
             <Typography>
              list of freelancer 
            </Typography>:
            <Typography>
              list of employer  
            </Typography>
           }
            

           {chat.map((chat) => (
             <Container  button key={chat.ChatId}  >
               <Chat chat={chat} handleClick={handleClick} />
             </Container>
             
           ))}
         </Container>
             )
         }
       </List>
    </>
      
  )   
}  


export default ChatList