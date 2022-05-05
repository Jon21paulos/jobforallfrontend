import React from "react";
import {  Button,Card,CardActionArea,CardActions,CardContent,CardMedia,makeStyles,Typography,} from "@material-ui/core";
import { useDispatch } from "react-redux";  
import { deletePost } from "../../../../../redux/actions/post";
import useStyles from "../../../../styles";
import { useNavigate } from "react-router-dom";

const Applied = ({ applied }) => {

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
                {applied.ApplierId.name}
            </Typography>
            <Typography variant="body2">
                {applied.ApplierId.phone}
            </Typography>
            <Typography variant="body2">
                {applied.EmployerId.company_name}
            </Typography>
            <Typography variant="body2">
                {applied.PostId.Title}
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            {/* <Button size="small" color="primary" onClick={()=>handleDelete(applier.JobId)}>
            Delete post
            </Button>
            <Button size="small" color="primary" onClick={()=>handleEdit(applier.JobId)}>
            Edit post
            </Button> */}
        </CardActions>
        </Card>
    );
};

export default Applied;