import { Container,Grid ,Box, Checkbox} from '@material-ui/core'
import { Typography ,TextField,FormControlLabel,Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React,{useState} from 'react'
import useStyles from '../../../styles'
import {useSelector,useDispatch} from "react-redux"
import {Snackbar} from '@mui/material';
import { postService } from '../../../../redux/actions/service';
import FileBase from 'react-file-base64'

function PostService() {
  const {profileData} = useSelector((state) => ({profileData:state.pr.profileData}))  

  const [snackBarOpen, setsnackBarOpen] = useState(false)
  
  const [postData, setPostData] = useState(
    { 
        Title: '', Jobtype: '',service_photo:'',
        Salary:null,City:'',Description:'',is_visible:true,user:profileData.user.JobseekerId
    });

  const [ClearPostData, setClearPostData] = useState(
    { 
        Title: '', Jobtype: '',service_photo:'',
        Salary:null,City:'',Description:'',is_visible:true,user:profileData.user.JobseekerId
    });

  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

 
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postService(postData,navigate));
    setsnackBarOpen(true)
    setPostData(ClearPostData)

  };
  
  const handleSnackClose=()=>{
    setsnackBarOpen(false)
  }

  return (
    <Container className={classes.container}>
      <Typography variant="h6" gutterBottom>
        post service
      </Typography>

      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="title"
              name="title"
              label="Postion (Job title)"
              fullWidth
              autoComplete="given-name"
              variant="standard"
              onChange={(e) => setPostData({ ...postData, Title: e.target.value })} 

            />
          </Grid>
          
         
          <Grid item xs={12}>
            <TextField
              id="jobtype"
              name="jobtype"
              label="Job Type"
              fullWidth
              autoComplete="shipping address-line2"
              variant="standard"
              value={postData.Jobtype} 
              onChange={(e) => setPostData({ ...postData, Jobtype: e.target.value })} 
              
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            
          <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, service_photo: base64 })} />    

          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              type="number"
              required
              id="Salary"
              name="Salary"
              label="Salary"
              fullWidth
              autoComplete="shipping address-level2"
              variant="standard"
              value={postData.Salary} 
              onChange={(e) => setPostData({ ...postData, Salary: e.target.value })} 
              
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              id="City"
              name="City"
              label="Place of work (city)"
              fullWidth
              variant="standard"
              value={postData.City} 
              onChange={(e) => setPostData({ ...postData, City: e.target.value })} 
             
            />
          </Grid>

          <Grid item xs={12} >
            <TextField
              required
              id="Description"
              name="Description"
              label="Job Description"
              fullWidth
              autoComplete="shipping postal-code"
              variant="standard"
              value={postData.Description} 
              onChange={(e) => setPostData({ ...postData, Description: e.target.value })} 
             
            />
          </Grid>
          
          
          <Grid item xs={12} sm={6}>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Post job
              </Button>
          </Grid>
        </Grid>
      </Box>
      <Snackbar
        message="you successfuly posted"
        autoHideDuration={4000}
        open={snackBarOpen}   
        onClose={handleSnackClose}   
        anchorOrigin={{
          vertical:'bottom',
          horizontal:'center'
        }}
      >
      </Snackbar>
    </Container>
  )
}

export default PostService