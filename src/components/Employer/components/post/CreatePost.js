import { Container,Grid ,Box} from '@material-ui/core'
import { Typography ,TextField,FormControlLabel,Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React from 'react'
import useStyles from '../../../styles'
import {useSelector,useDispatch} from "react-redux"
import { createPost } from '../../../../redux/actions/post';

function CreatePost() {
  const classes = useStyles();
  // const {accountData} = useSelector((state) => ({accountData:state.ar.accountData}))
  const {profileData} = useSelector((state) => ({profileData:state.pr.profileData}))  

  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log("your profileData is " +profileData.user.EmployerId)
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const form = {
      user: profileData.user.EmployerId,
      Title: data.get('title'),
      Deadline:data.get('deadline'),
      Jobtime:data.get('jobtime'),
      Jobtype:data.get('jobtype'),
      Salary:data.get('salary'),
      City:data.get('city'),
      Description:data.get('description'),
    }
    console.log(form)
    dispatch(createPost(form,navigate));

  };

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
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="deadline"
              name="deadline"
              label="Closing Date/ Deadline"
              fullWidth
              autoComplete="family-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="jobtime"
              name="jobtime"
              label="Job Time"
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
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
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="salary"
              name="salary"
              label="Salary"
              fullWidth
              autoComplete="shipping address-level2"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="city"
              name="city"
              label="Place of work (city)"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              required
              id="description"
              name="description"
              label="Job Description"
              fullWidth
              autoComplete="shipping postal-code"
              variant="standard"
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
    </Container>
  )
}

export default CreatePost