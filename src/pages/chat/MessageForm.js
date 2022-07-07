import React,{useState,useEffect}from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useDispatch,useSelector} from 'react-redux'
import { createMessage } from "../../redux/actions/chat";
import { useNavigate,useParams } from 'react-router-dom';

export default function MessageForm({messageId}) {
    const [sendData, setSendData] = useState({ Message: '',ChatId: '',sender:''});
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {accountData} = useSelector((state) => ({accountData:state.ar.accountData}))
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(createMessage(navigate,sendData))
      };

    return(
     <>
      <form  onSubmit={handleSubmit}>
          <TextField name="Message" variant="outlined" label="type some thing" fullWidth value={sendData.Message} onChange={(e) => setSendData({ ...sendData, Message: e.target.value,ChatId: messageId,sender: accountData.user.id })} />   
          <Button variant="contained" color="primary" type="submit" >Send</Button>
      </form>
     </>
     )
}