import React,{useState,useEffect} from 'react'
import { Container,Avatar, makeStyles,Grid,Box,Link,Button,Checkbox,TextField,FormControlLabel, Typography } from "@material-ui/core";
import FileBase from 'react-file-base64'
import {useDispatch} from "react-redux"
import { EditEmployerProfile } from '../../../redux/actions/profile';

function EditProfileE({profileData,setisedit}) {
  const [postData, setPostData] = useState(
        { 
            user: '', company_name: '', adderss: '', phone: '', profile_photo: '',
            description:'',website:'',objective:'',achivement_and_award:'',activities:'',
            social_media:''
        });

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(EditEmployerProfile(postData.user,postData))    
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
              id="company_name"
              label="company_name"
              name="company_name"
              autoComplete="company_name"
              autoFocus
              value={postData.company_name} 
              onChange={(e) => setPostData({ ...postData, company_name: e.target.value })} 

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
              name="description"
              label="description"
              type="description"
              id="description"
              autoComplete="description"
              value={postData.description} 
              onChange={(e) => setPostData({ ...postData, description: e.target.value })} 
              
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="website"
              label="adderss"
              type="website"
              id="website"
              autoComplete="website"
              value={postData.website} 
              onChange={(e) => setPostData({ ...postData, website: e.target.value })} 
              
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

export default EditProfileE