import React,{useState,useEffect} from 'react'
import { Container, CircularProgress,Card,CardHeader,CardContent, Grid,Box,Link,Button,Checkbox,TextField,FormControlLabel, Typography } from "@material-ui/core";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import useStyles from '../../components/styles';
import {useSelector,useDispatch} from "react-redux"
import { useNavigate } from 'react-router-dom';
import { getRating, getTestimonial } from '../../redux/actions/feedback';
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

function Profile() {
  const classes = useStyles();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {accountData} = useSelector((state) => ({accountData:state.ar.accountData}))

  const [jobseekerProfile, setJobseekerProfile] = useState(
    { 
        user: '', name: '', adderss: '', phone: '', profile_photo: '',
        degree:'',grade:'',year:'',tempo:'',company_name:'',job_title:'',start_and_end_date:'',detail:'',
        skills:'', objective:'',project_title:'',project_description:'',achivement_and_award:'',activities:'',
        social_media:''
    });
  const [employerProfile, setEmployerProfile] = useState(
        { 
            user: '', company_name: '', adderss: '', phone: '', profile_photo: '',
            description:'',website:'',objective:'',achivement_and_award:'',activities:'',
            social_media:''
        });
  const {profile} = useSelector((state) => ({profile:state.pr.profile}))
  const {testimonial} = useSelector((state) => ({testimonial:state.feedbackReducer.testimonial}))
  const {rating} = useSelector((state) => ({rating:state.feedbackReducer.rating}))
     
  useEffect(() => {

    accountData.user.is_employer? getjobseekerProfile() :setEmployerProfile(profile)

  }, [])

 const getjobseekerProfile=()=>{
    setJobseekerProfile(profile)
    dispatch(getTestimonial(navigate,profile.JobseekerId))
    dispatch(getRating(navigate,profile.JobseekerId))

 } 
  return (
    <>
     <Container className={classes.container} >
      
        {
            accountData.user.is_employer?
        <Box
             sx={{
             marginTop: 0,
             display: 'flex',
             flexDirection: 'column',
             alignItems: 'center',
             }}
          >
            <Stack direction="row" spacing={0}>

            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              badgeContent={
                <SmallAvatar alt="Remy Sharp" src={jobseekerProfile.profile_photo} />
              }
            >
              <Avatar 
            
              sx={{ width:800, height: 250 ,margin: 2}}
              alt="" src={jobseekerProfile.profile_photo} variant="rounded" display='block' />
            </Badge>

        </Stack>
        <Grid container spacing={2} margin={4}>
          <Grid item xs={4}>
            <Typography>Name</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography component="h1" variant="h6">
              {jobseekerProfile.name}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>Phone Number</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography component="h1" variant="h6">
              {jobseekerProfile.phone}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>Address</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography component="h1" variant="h6">
             {jobseekerProfile.adderss}
            </Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography>Education Level</Typography>
          </Grid>
          <Grid item xs={8}>
             <Typography variant="h6" color="text.secondary">
             {jobseekerProfile.degree}
            </Typography>
          </Grid>
          
          <Grid item xs={4}>
            <Typography>About</Typography>
          </Grid>
          <Grid item xs={8}>
             <Typography variant="h6" color="text.secondary">
             {jobseekerProfile.detail}
            </Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography>CGPA</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h6" color="text.secondary">
             {jobseekerProfile.grade}
            </Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography>Expriance</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h6" color="text.secondary">
            {jobseekerProfile.year}
            </Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography>skills</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h6" color="text.secondary">
            {jobseekerProfile.skills}
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
                </Card>:<></>
            }
           
         </Box>:

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
                <SmallAvatar alt="" src={employerProfile.profile_photo} />
              }
            >
              <Avatar 

              sx={{ width:800, height: 250 ,margin: 2}}
              
              src={employerProfile.profile_photo} variant="rounded" display='block' />
            </Badge>

            </Stack>
            <Grid container spacing={2} margin={4}>
              <Grid item xs={4}>
                <Typography>Company Name</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography component="h1" variant="h6">
                {employerProfile.company_name}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography>Address</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography component="h1" variant="h6">
                {employerProfile.adderss}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography>Phone number</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography component="h1" variant="h6">
                {employerProfile.phone}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography>Description</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography component="h1" variant="h6">
                {employerProfile.description}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography>Activities</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography component="h1" variant="h6">
                {employerProfile.activities}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography>Objective</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography component="h1" variant="h6">
                {employerProfile.objective}
                </Typography>
              </Grid>
            </Grid>  
            
                
          </Box>
         }
      </Container>
    </>
  )
}

export default Profile