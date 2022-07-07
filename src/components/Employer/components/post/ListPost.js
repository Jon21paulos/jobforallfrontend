import React,{useState,useEffect} from "react";
import { Pagination } from "@mui/material";
import { Container, makeStyles,Grid,CircularProgress } from "@material-ui/core";
import Post from "./post/Post";
import { useSelector,useDispatch } from "react-redux";
import useStyles from "../../../styles";
import EditPost from "./EditPost";
import {useNavigate} from 'react-router-dom'
import { getPosts } from "../../../../redux/actions/post";

function ListPost() {
  
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {profileData} = useSelector((state) => ({profileData:state.pr.profileData}))
  const page = 1
  const path = `user=${profileData.user.EmployerId}&Title=&Deadline=&Jobtime=&Jobtype=&Salary=&City=&Description=&is_freelancer=&is_visible=true`;
  const count = useSelector((state) => state.por.count);
  
  useEffect(() => {
    dispatch(getPosts(navigate,page,path))
  }, [])
  
  const handleChange= async (event,p)=>{
     dispatch(getPosts(navigate,p,path))
  }
  const [isedit, setisedit] = useState(true);
  const [postData, setpostData] = useState(null);

  // const {posts} = useSelector((s) => s.por)
  const {posts} = useSelector((s) => ({posts:s.por.posts}))

  return(
      <>
      {
        isedit?
        <Container className={classes.container}>
        {
          !posts.length ? <CircularProgress /> : (
          <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {posts.map((post) => (
              <Grid key={post.JobId} item xs={12} sm={12} md={12}>
                  <Post post={post} setisedit={setisedit} setpostData={setpostData}/>:  
              </Grid>
            ))}
            <Pagination
              count={Math.ceil(count/10)}
              onChange={handleChange}
            />
          </Grid>
              )
          }
        </Container>:
        <Container className={classes.container}>
          <EditPost post={postData} setisedit={setisedit}/>
        </Container>

      }
        
      
      </>
  )   
}  


export default ListPost