import React,{useState,useEffect} from "react";
import {  ListItemText,ListItemAvatar, Avatar,CardActions,CardContent,CardMedia,makeStyles,Typography,} from "@material-ui/core";
import ImageIcon from '@mui/icons-material/Image';
import { useDispatch,useSelector } from "react-redux"; 
import useStyles from "../../../components/styles"; 
import { useNavigate ,useLocation} from "react-router-dom";
import { Container } from "@mui/material";

const Message = ({ message}) => {

    const {accountData} = useSelector((state) => ({accountData:state.ar.accountData}))
    const {chat} = useSelector((s) => ({chat:s.chatReducer.chat}))
    console.log(chat)
    return (
          <>
             {
                accountData.user.id===message.sender?null:
                accountData.user.is_employer?
                <ListItemAvatar>
                  <Avatar src={chat.JobseekerId.profile_photo} />
                </ListItemAvatar>
                :
                <ListItemAvatar>
                        <Avatar src={chat.EmployerId.profile_photo} />
                </ListItemAvatar>
             }
             
             {
                    accountData.user.id===message.sender?
                        <ListItemText primary={message.Message} secondary={message.created_at} />:
                    accountData.user.is_employer?
                            <ListItemText primary={chat.JobseekerId.name} secondary={message.Message} />:
                            <ListItemText primary={chat.EmployerId.company_name} secondary={message.Message} />        
                        
              }             
          </>
    );
};

export default Message;