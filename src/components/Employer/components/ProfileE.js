import React,{useState,useEffect} from 'react'
import { Container,Avatar, makeStyles,Grid,Box,Link,Button,Checkbox,TextField,FormControlLabel, Typography } from "@material-ui/core";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import useStyles from "../../styles";
import {useSelector,useDispatch} from "react-redux"
import { ReadEmployerProfile } from '../../../redux/actions/profile';
import EditProfileE from './EditProfileE';

function ProfileE() {
  const classes = useStyles();
  const [isedit, setisedit] = useState(true);
  const {profileData} = useSelector((state) => ({profileData:state.pr.profileData}))  
  
  return (
   
    <>
     <Container className={classes.container} >
       <Button onClick={()=>setisedit(!isedit)}>
           Edit Profile
       </Button>
       {
       isedit?
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
    
          <img 
            alt="Remy Sharp"
            src={profileData.user.profile_photo}
            width="700" height="500"       
          /> 
          
          <Typography component="h1" variant="h5">
            {profileData.user.company_name}
          </Typography>
          <Typography component="h1" variant="h5">
            {profileData.user.description}
          </Typography>
          <Typography component="h1" variant="h5">
            {profileData.user.company_name}
          </Typography>
          <Typography component="h1" variant="h5">
            {profileData.user.phone}
          </Typography>
        </Box>
        :
        <EditProfileE profileData={profileData} setisedit={setisedit}/>
        }
      </Container>
    </>
  )
}

export default ProfileE