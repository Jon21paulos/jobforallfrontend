import React from "react";
import { Container, makeStyles,Grid,CircularProgress } from "@material-ui/core";
import Post from "./Post/Post";
import { useSelector } from "react-redux";
import useStyles from "../../styles";

const FeedJ = () => {
  const classes = useStyles();
  const posts = useSelector((state) => state.por.posts);
  
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
          </Grid>
         )
      }
    </Container>
  );
};

export default FeedJ;