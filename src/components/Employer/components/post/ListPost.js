import React from "react";

import { Container, makeStyles,Grid,CircularProgress } from "@material-ui/core";
import Post from "./post/Post";
import { useSelector } from "react-redux";
import useStyles from "../../../styles";

function ListPost() {
  
  const classes = useStyles();

  // const {posts} = useSelector((s) => s.por)
  const {posts} = useSelector((s) => ({posts:s.por.posts}))

  console.log('jon',posts)
  return(
      <Container className={classes.container}>
      {
        !posts.length ? <CircularProgress /> : (
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {posts.map((post) => (
            <Grid key={post.JobId} item xs={12} sm={6} md={6}>
              <Post post={post} />
            </Grid>
          ))}
        </Grid>
            )
        }
      </Container> 
  )   
}  


export default ListPost