import React from "react";
import {  Button,Card,CardActionArea,CardActions,CardContent,CardMedia,makeStyles,Typography,} from "@material-ui/core";
import { useDispatch } from "react-redux";  
import { deletePost } from "../../../../../redux/actions/post";
import useStyles from "../../../../styles";
import { useNavigate } from "react-router-dom";
const Post = ({ post }) => {
const classes = useStyles();
const dispatch = useDispatch();
const navigate = useNavigate();

const handleDelete = (id) =>{
    dispatch(deletePost(id,navigate))
}

const handleEdit = (id) =>{
    console.log("your id is", id)
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
        <Button size="small" color="primary" onClick={()=>handleDelete(post.JobId)}>
        Delete post
        </Button>
        <Button size="small" color="primary" onClick={()=>handleEdit(post.JobId)}>
        Edit post
        </Button>
    </CardActions>
    </Card>
);
};

export default Post;