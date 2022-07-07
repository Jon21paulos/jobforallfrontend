import React,{useState,useEffect} from 'react'
import { Container, CircularProgress,Card,CardHeader,CardContent, Grid,Box,Link,Button,Checkbox,TextField,FormControlLabel, Typography } from "@material-ui/core";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import useStyles from "../../styles";
import {useSelector,useDispatch} from "react-redux"
import { ReadJobseekerProfile } from '../../../redux/actions/profile';
import EditProfileJ from './EditProfileJ';
import { getTestimonial,getRating } from '../../../redux/actions/feedback';
import { useNavigate } from 'react-router-dom';
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
function ProfileJ() {
  const classes = useStyles();
  const [isedit, setisedit] = useState(true);
  const {profileData} = useSelector((state) => ({profileData:state.pr.profileData}))
  const {testimonial} = useSelector((state) => ({testimonial:state.feedbackReducer.testimonial}))
  const {rating} = useSelector((state) => ({rating:state.feedbackReducer.rating}))
  const dispatch = useDispatch()
  const navigation = useNavigate()

  useEffect(() => {
    dispatch(getTestimonial(navigation,profileData.user.JobseekerId))
    dispatch(getRating(navigation,profileData.user.JobseekerId))

  }, [])  

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
        <Stack direction="row" spacing={2}>

        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          badgeContent={
            <SmallAvatar alt="Remy Sharp" src={profileData.user.profile_photo} />
          }
        >
          <Avatar 

          sx={{ width:800, height: 250 ,margin: 2}}
          alt="" src={profileData.user.profile_photo} variant="rounded" display='block' />
        </Badge>

        </Stack>
        <Grid container spacing={2} margin={4}>
          <Grid item xs={4}>
            <Typography>Name</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography component="h1" variant="h6">
              {profileData.user.name}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>Phone Number</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography component="h1" variant="h6">
              {profileData.user.phone}
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
            <Typography>Education Level</Typography>
          </Grid>
          <Grid item xs={8}>
             <Typography variant="h6" color="text.secondary">
             {profileData.user.degree}
            </Typography>
          </Grid>
          
          <Grid item xs={4}>
            <Typography>About</Typography>
          </Grid>
          <Grid item xs={8}>
             <Typography variant="h6" color="text.secondary">
             {profileData.user.detail}
            </Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography>CGPA</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h6" color="text.secondary">
             {profileData.user.grade}
            </Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography>Expriance</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h6" color="text.secondary">
            {profileData.user.year}
            </Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography>skills</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h6" color="text.secondary">
            {profileData.user.skills}
            </Typography>
          </Grid>

        </Grid>
        {
        !testimonial.length ? <CircularProgress /> : (
            
            testimonial.map((testimonial) => (
              <Container button key={testimonial.testimonialId}  >
                
                <Card sx={{ minWidth: 275 }} className={classes.card}> 
                  <CardHeader
                      avatar={
                        <Avatar src={testimonial.employerId.profile_photo} />
                      }

                      title={testimonial.employerId.company_name}
                      subheader={testimonial.adderss}
                  
                    />     
                  <CardContent>
                    <Typography >
                    {testimonial.testimonial}
                    </Typography>                     
                  </CardContent>
                  
                </Card>
                </Container>
                ))
            )
        }
        {
          rating?
            <Card sx={{ minWidth: 275 }} className={classes.card}> 
                <CardContent>
                  
                <Typography >
                your job success rate is {rating}
                </Typography>                     
                </CardContent> 
            </Card>:
            null
        }

        
        </Box>
        :
        <EditProfileJ profileData={profileData} setisedit={setisedit}/>

       }
      </Container>
    </>
  )
}

export default ProfileJ