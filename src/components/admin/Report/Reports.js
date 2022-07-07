import React,{useState,useEffect} from "react";
import { Pagination } from "@mui/material";
import { Container, makeStyles,Grid,CircularProgress } from "@material-ui/core";
import { useSelector,useDispatch } from "react-redux";
import useStyles from "../../styles";
import {useNavigate} from 'react-router-dom'
import { getReports } from "../../../redux/actions/report";
import Report from "./Report";

function Reports() {
  
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const page = 1
  const count = useSelector((state) => state.reportReducer.count);
  
  useEffect(() => {
    dispatch(getReports(navigate,page))
  }, [])
  
  const handleChange= async (event,page)=>{
    dispatch(getReports(navigate,page))
  }
  
  const {report} = useSelector((s) => ({report:s.reportReducer.report}))

  return(
      <>
        <Container className={classes.container}>
        {
          !report.length ? <CircularProgress /> : (
          <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {report.map((report) => (
              <Grid key={report.reportId} item xs={12} sm={12} md={12}>
                  <Report report={report} />  
              </Grid>
            ))}
            <Pagination
              count={Math.ceil(count/10)}
              onChange={handleChange}
            />
          </Grid>
              )
          }
        </Container>
      </>
  )   
}  


export default Reports