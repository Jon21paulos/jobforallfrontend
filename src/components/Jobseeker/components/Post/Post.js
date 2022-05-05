import React from "react";
import { useSelector ,useDispatch} from "react-redux";
import {  Button,Card,CardActionArea,CardActions,CardContent,CardMedia,makeStyles,Typography,} from "@material-ui/core";
import useStyles from "../../../styles";
import { useNavigate } from "react-router-dom";
import { applyPost } from "../../../../redux/actions/applier";

const Post = ({ post }) => {
  
  const classes = useStyles();
  const {profileData} = useSelector((state) => ({profileData:state.pr.profileData}))
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleApplyPost = (JobId,EmployerId) =>{
    const applydata = {
      "EmployerId": EmployerId,
      "ApplierId": profileData.user.JobseekerId,
      "PostId": JobId
    }
    dispatch(applyPost(applydata,navigate))
  }
  return (
    <Card className={classes.card}>
      <CardActionArea>
        {/* <CardMedia className={classes.media} image={img} title="My Post" /> */}
        <CardContent>
          <Typography gutterBottom variant="h5">
            {post.Title}
          </Typography>
          <Typography variant="body2">
            {post.Description}
          </Typography>
          <Typography variant="body2">
            {post.Jobtype}
          </Typography>
          <Typography variant="body2">
            {post.Jobtime}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>handleApplyPost(post.JobId,post.user.EmployerId)}>
          apply post
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;