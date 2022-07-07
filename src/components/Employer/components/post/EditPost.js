import React,{useState,useEffect} from 'react'
import { Container,Avatar, makeStyles,Grid,Box,Link,Button,Checkbox,TextField,FormControlLabel, Typography } from "@material-ui/core";
import {useDispatch} from "react-redux"
import { updatePost } from '../../../../redux/actions/post';
import {useNavigate } from 'react-router-dom'
import DatePicker from 'react-date-picker';

function EditPost({post,setisedit}) {
  const [postData, setPostData] = useState(
        { 
            Title: '', Deadline: null, Jobtype: '',
            Salary:'',City:'',Description:'',is_freelancer:null,is_visible:null,user:post.user.EmployerId
        });
        
  const [isfreelancer, setisfreelancer] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const postForm =  { 
      Title: postData.Title, Deadline: postData.Deadline, Jobtime: postData.Jobtime, Jobtype: postData.Jobtype,
      Salary:postData.Salary,City:postData.City,Description:postData.Description,is_freelancer:postData.is_freelancer,
      is_visible:postData.is_visible,
      user:postData.user.EmployerId
    }
    dispatch(updatePost(postData.JobId,postForm,navigate))
    setisedit(true)

  };
  
  useEffect(() => {
    setPostData(post)
  }, [])

  return (
    <>
          <Typography component="h1" variant="h5">
            Edit your posted job
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          
            <TextField
              margin="normal"
              required
              fullWidth
              id="Title"
              label="Title"
              name="Title"
              autoComplete="Title"
              autoFocus
              value={postData.Title} 
              onChange={(e) => setPostData({ ...postData, Title: e.target.value })} 

            />
            <DatePicker 
              selected = {postData.Deadline}
              onChange = {date => setPostData({...postData,Deadline:date})}
              dateFormat='yyyy/MM/dd'
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Deadline"
              label="Deadline"
              type="Deadline"
              id="Deadline"
              autoComplete="Deadline"
              value={postData.Deadline} 
              onChange={(e) => setPostData({ ...postData, Deadline: e.target.value })} 
              
            />
            
   

             <TextField
              margin="normal"
              required
              fullWidth
              name="Jobtype"
              label="Jobtype"
              type="Jobtype"
              id="Jobtype"
              autoComplete="Jobtype"
              value={postData.Jobtype} 
              onChange={(e) => setPostData({ ...postData, Jobtype: e.target.value })} 
              
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="Salary"
              label="Salary"
              type="Salary"
              id="Salary"
              autoComplete="Salary"
              value={postData.Salary} 
              onChange={(e) => setPostData({ ...postData, Salary: e.target.value })} 
              
            />
             <TextField
              margin="normal"
              required
              fullWidth
              name="City"
              label="City"
              type="City"
              id="City"
              autoComplete="City"
              value={postData.City} 
              onChange={(e) => setPostData({ ...postData, City: e.target.value })} 
             
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Description"
              label="Description"
              type="Description"
              id="Description"
              autoComplete="Description"
              value={postData.Description} 
              onChange={(e) => setPostData({ ...postData, Description: e.target.value })} 
             
            />
            <FormControlLabel
                label="post for freelancer"
                control={<Checkbox checked={postData.is_freelancer} onChange={(e) => setPostData({ ...postData, is_freelancer: e.currentTarget.checked })}/>}
              >
            </FormControlLabel>
            <FormControlLabel
                label="visivility"
                control={<Checkbox checked={postData.is_visible} onChange={(e) => setPostData({ ...postData, is_visible: e.currentTarget.checked })}/>}
              >
            </FormControlLabel>
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

export default EditPost