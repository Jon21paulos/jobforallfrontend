import React,{useState} from 'react'
import { Typography,Grid,TextField,Container, Button} from "@material-ui/core";
import useStyles from "../../../styles";
import { getPosts } from '../../../../redux/actions/post';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { filterApplier } from '../../../../redux/actions/applier';

function FilterApplier() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [filterData, setFilterData] = useState({ degree: '', grade: '', year: '', adderss:''});
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(filterApplier(filterData.degree,filterData.grade,filterData.year,filterData.adderss))
  };
  
  return (
    <Container className={classes.container}>
    <Typography variant="h6" gutterBottom>
      Filter options
    </Typography>
      <form  onSubmit={handleSubmit}>
        <TextField name="Education Level" variant="outlined" label="Education Level" fullWidth value={filterData.degree} onChange={(e) => setFilterData({ ...filterData, degree: e.target.value })} />
        <TextField name="CFG" variant="outlined" label="C" fullWidth value={filterData.grade} onChange={(e) => setFilterData({ ...filterData, grade: e.target.value })} />
        <TextField name="Expriance" variant="outlined" label="Expriance" fullWidth value={filterData.year} onChange={(e) => setFilterData({ ...filterData, year: e.target.value })} />
        <TextField name="address" variant="outlined" label="address" fullWidth value={filterData.adderss} onChange={(e) => setFilterData({ ...filterData, adderss: e.target.value })} />
        
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
      </form>
    </Container>
  )
}

export default FilterApplier