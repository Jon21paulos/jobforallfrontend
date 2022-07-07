import { Container,Grid ,Box, Checkbox} from '@material-ui/core'
import { Typography ,TextField,FormControlLabel,Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React,{useState} from 'react'
import useStyles from '../../../styles'
import {useSelector,useDispatch} from "react-redux"
import { createPost } from '../../../../redux/actions/post';
import DatePicker from 'react-date-picker';
import {Snackbar} from '@mui/material';

function CreatePost() {
  const {profileData} = useSelector((state) => ({profileData:state.pr.profileData}))  
  const [isfreelancer, setisfreelancer] = useState(false)
  const [snackBarOpen, setsnackBarOpen] = useState(false)
  const [postData, setPostData] = useState(
    { 
        Title: '', Deadline: null, Jobtype: '',
        Salary:null,City:'',Description:'',is_freelancer:isfreelancer,is_visible:true,user:profileData.user.EmployerId
    });
  const [ClearPostData, setClearPostData] = useState(
      { 
          Title: '', Deadline: null, Jobtype: '',
          Salary:null,City:'',Description:'',is_freelancer:isfreelancer,is_visible:true,user:profileData.user.EmployerId
      });
  const classes = useStyles();
  // const {accountData} = useSelector((state) => ({accountData:state.ar.accountData}))
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (event) =>{
    setisfreelancer(event.currentTarget.checked)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createPost(postData,navigate));
    setsnackBarOpen(true)
    setPostData(ClearPostData)

  };
  const handleSnackClose=()=>{
    setsnackBarOpen(false)
  }
  return (
    <Container className={classes.container}>
      <Typography variant="h6" gutterBottom>
        Job Posting Form
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
          <Grid item xs={12} sm={6}>
            {/* <TextField
              required
              id="deadline"
              name="deadline"
              label="Closing Date/ Deadline"
              fullWidth
              autoComplete="family-name"
              variant="standard"
            /> */}
              <DatePicker 
                selected = {postData.Deadline}
                onChange = {date => setPostData({...postData,Deadline:date})}
                dateFormat='yyyy/MM/dd'
                showTimeSelect

              />


           

          </Grid>
          {/* <Grid item xs={12}>
            <TextField
              required
              id="jobtime"
              name="jobtime"
              label="Job Time"
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
            />
          </Grid> */}
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
            <FormControlLabel
                label="post for freelancer"
                control={<Checkbox checked={postData.is_freelancer} onChange={(e) => setPostData({ ...postData, is_freelancer: e.currentTarget.checked })}/>}
              >
              </FormControlLabel>
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

export default CreatePost