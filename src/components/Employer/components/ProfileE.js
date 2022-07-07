import React,{useState,useEffect} from 'react'
import { Container, makeStyles,Grid,Box,Link,Button,Checkbox,TextField,FormControlLabel, Typography } from "@material-ui/core";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import useStyles from "../../styles";
import {useSelector,useDispatch} from "react-redux"
import EditProfileE from './EditProfileE';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 100,
  height: 100,
  border: `2px solid ${theme.palette.background.paper}`,
  marginLeft :'200px',
}));

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
     <Stack direction="row" spacing={4}>

        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          badgeContent={
            <SmallAvatar alt="" src={profileData.user.profile_photo} />
          }
        >
          <Avatar 

          sx={{ width:800, height: 250 ,margin: 2}}
          
          src={profileData.user.profile_photo} variant="rounded" display='block' />
        </Badge>

        </Stack>
        <Grid container spacing={2} margin={4}>
          <Grid item xs={4}>
            <Typography>Company Name</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography component="h1" variant="h6">
            {profileData.user.company_name}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>Address</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography component="h1" variant="h6">
            {profileData.user.adderss}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>Phone number</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography component="h1" variant="h6">
            {profileData.user.phone}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>Description</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography component="h1" variant="h6">
            {profileData.user.description}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>Activities</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography component="h1" variant="h6">
            {profileData.user.activities}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>Objective</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography component="h1" variant="h6">
            {profileData.user.objective}
            </Typography>
          </Grid>
        </Grid>     
      
        </Box>
        :
        <EditProfileE profileData={profileData} setisedit={setisedit}/>
        }
      </Container>
    </>
  )
}

export default ProfileE