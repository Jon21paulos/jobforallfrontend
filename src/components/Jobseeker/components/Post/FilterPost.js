import React,{useState} from 'react'
import { Typography,FormControlLabel,Checkbox, TextField,Container, Button} from "@material-ui/core";
import useStyles from "../../../styles";
import { useDispatch } from 'react-redux';
import { getPosts } from '../../../../redux/actions/post';
import { useNavigate } from 'react-router-dom';

function FilterPost() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const page = 1;
  const [filterData, setFilterData] = useState({ companyName: '', Title: '', Deadline: '', Jobtime: '', Jobtype: '' ,Salary:'',City:'',is_freelancer:false});
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const path = `user=${filterData.companyName}&Title=${filterData.Title}&Deadline=${filterData.Deadline}&Jobtime=${filterData.Jobtime}&Jobtype=${filterData.Jobtype}&Salary=${filterData.Salary}&City=${filterData.City}&Description=&is_freelancer=${filterData.is_freelancer}`
    dispatch(getPosts(navigate,page,path))

  };


  return (
    <Container className={classes.container}>
    <Typography variant="h6" gutterBottom>
      Filter options
    </Typography>
      <form  onSubmit={handleSubmit}>
        <TextField name="Title" variant="outlined" label="Title" fullWidth value={filterData.Title} onChange={(e) => setFilterData({ ...filterData, Title: e.target.value })} />
        <TextField name="Jobtype" variant="outlined" label="Jobtype" fullWidth value={filterData.Jobtype} onChange={(e) => setFilterData({ ...filterData, Jobtype: e.target.value })} />
        <TextField name="Salary" variant="outlined" label="Salary" fullWidth value={filterData.Salary} onChange={(e) => setFilterData({ ...filterData, Salary: e.target.value })} />
        <TextField name="City" variant="outlined" label="City" fullWidth value={filterData.City} onChange={(e) => setFilterData({ ...filterData, City: e.target.value })} />
        
        <FormControlLabel
                label="freelance jobs"
                control={<Checkbox checked={FormData.isfreelancer} 
                onChange={(e) => setFilterData({ ...filterData, is_freelancer: e.currentTarget.checked })} 
                />}
              >
        </FormControlLabel>              
        
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
      </form>
    </Container>
  )
}

export default FilterPost