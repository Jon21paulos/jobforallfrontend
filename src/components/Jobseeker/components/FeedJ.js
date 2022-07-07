import React from "react";
import { Container, makeStyles,Grid,CircularProgress } from "@material-ui/core";
import Post from "./Post/Post";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "../../styles";
import { Pagination } from "@mui/material";
import { getPosts } from "../../../redux/actions/post";
import { useNavigate } from "react-router-dom";

const FeedJ = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const posts = useSelector((state) => state.por.posts);
  const count = useSelector((state) => state.por.count);
  const path = '';
  
  
  const handleChange= async (event,page)=>{
    console.log(page)
     dispatch(getPosts(navigate,page,path))
  }
  
  return (
    <Container className={classes.container}>
       {
         !posts.length ? <CircularProgress /> : (
          <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {posts.map((post) => (
              <Grid key={post.JobId} item xs={12} >
                <Post post={post} />
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
  );
};

export default FeedJ;