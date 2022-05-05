import React,{useState,useEffect} from 'react'
import { Container,Avatar, makeStyles,Grid,Box,Link,Button,Checkbox,TextField,FormControlLabel, Typography } from "@material-ui/core";
import FileBase from 'react-file-base64'
import {useDispatch} from "react-redux"
import {EditJobseekerProfile} from '../../../redux/actions/profile'

function EditProfileJ({profileData,setisedit}) {
    
  const [postData, setPostData] = useState(
        { 
            user: '', name: '', adderss: '', phone: '', profile_photo: '',
            degree:'',grade:'',year:'',tempo:'',company_name:'',job_title:'',start_and_end_date:'',detail:'',
            skills:'', objective:'',project_title:'',project_description:'',achivement_and_award:'',activities:'',
            social_media:''
        });

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(postData)
    dispatch(EditJobseekerProfile(postData.user,postData))    
    setisedit(true)
  };
  
  useEffect(() => {
    setPostData(profileData.user)
  }, [])

  return (
    <>
          <Typography component="h1" variant="h5">
            Edit your profile
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="name"
              name="name"
              autoComplete="name"
              autoFocus
              value={postData.name} 
              onChange={(e) => setPostData({ ...postData, name: e.target.value })} 

            />
            
            <TextField
              margin="normal"
              required
              fullWidth
              name="adderss"
              label="adderss"
              type="adderss"
              id="adderss"
              autoComplete="adderss"
              value={postData.adderss} 
              onChange={(e) => setPostData({ ...postData, adderss: e.target.value })} 
              
            />
             <TextField
              margin="normal"
              required
              fullWidth
              name="phone"
              label="phone"
              type="phone"
              id="phone"
              autoComplete="phone"
              value={postData.phone} 
              onChange={(e) => setPostData({ ...postData, phone: e.target.value })} 
              
            />
   
            <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, profile_photo: base64 })} />    

             <TextField
              margin="normal"
              required
              fullWidth
              name="degree"
              label="degree"
              type="degree"
              id="degree"
              autoComplete="degree"
              value={postData.degree} 
              onChange={(e) => setPostData({ ...postData, degree: e.target.value })} 
              
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="grade"
              label="grade"
              type="grade"
              id="grade"
              autoComplete="grade"
              value={postData.grade} 
              onChange={(e) => setPostData({ ...postData, grade: e.target.value })} 
              
            />
             <TextField
              margin="normal"
              required
              fullWidth
              name="year"
              label="year"
              type="year"
              id="year"
              autoComplete="year"
              value={postData.year} 
              onChange={(e) => setPostData({ ...postData, year: e.target.value })} 
             
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="tempo"
              label="tempo"
              type="tempo"
              id="tempo"
              autoComplete="tempo"
              value={postData.tempo} 
              onChange={(e) => setPostData({ ...postData, tempo: e.target.value })} 
              
            />
   
             <TextField
              margin="normal"
              required
              fullWidth
              name="company_name"
              label="company_name"
              type="company_name"
              id="company_name"
              autoComplete="company_name"
              value={postData.company_name} 
              onChange={(e) => setPostData({ ...postData, company_name: e.target.value })} 
              
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="job_title"
              label="job_title"
              type="job_title"
              id="job_title"
              autoComplete="job_title"
              value={postData.job_title} 
              onChange={(e) => setPostData({ ...postData, job_title: e.target.value })} 
              
            />
             <TextField
              margin="normal"
              required
              fullWidth
              name="start_and_end_date"
              label="start_and_end_date"
              type="start_and_end_date"
              id="start_and_end_date"
              autoComplete="start_and_end_date"
              value={postData.start_and_end_date} 
              onChange={(e) => setPostData({ ...postData, start_and_end_date: e.target.value })} 
             
            />

             <TextField
              margin="normal"
              required
              fullWidth
              name="detail"
              label="detail"
              type="detail"
              id="detail"
              autoComplete="detail"
              value={postData.detail} 
              onChange={(e) => setPostData({ ...postData, detail: e.target.value })} 
              
            />
   

             <TextField
              margin="normal"
              required
              fullWidth
              name="objective"
              label="objective"
              type="objective"
              id="objective"
              autoComplete="objective"
              value={postData.objective} 
              onChange={(e) => setPostData({ ...postData, objective: e.target.value })} 
              
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="project_title"
              label="project_title"
              type="project_title"
              id="project_title"
              autoComplete="project_title"
              value={postData.project_title} 
              onChange={(e) => setPostData({ ...postData, project_title: e.target.value })} 
              
            />

             <TextField
              margin="normal"
              required
              fullWidth
              name="project_description"
              label="project_description"
              type="project_description"
              id="project_description"
              autoComplete="project_description"
              value={postData.project_description} 
              onChange={(e) => setPostData({ ...postData, project_description: e.target.value })} 
             
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="achivement_and_award"
              label="achivement_and_award"
              type="achivement_and_award"
              id="achivement_and_award"
              autoComplete="achivement_and_award"
              value={postData.achivement_and_award} 
              onChange={(e) => setPostData({ ...postData, achivement_and_award: e.target.value })} 
             
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="activities"
              label="activities"
              type="activities"
              id="activities"
              autoComplete="activities"
              value={postData.activities} 
              onChange={(e) => setPostData({ ...postData, activities: e.target.value })} 
             
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="social_media"
              label="social_media"
              type="social_media"
              id="social_media"
              autoComplete="social_media"
              value={postData.social_media} 
              onChange={(e) => setPostData({ ...postData, social_media: e.target.value })} 
             
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update
            </Button>

          </Box>
    </>
  )
}

export default EditProfileJ