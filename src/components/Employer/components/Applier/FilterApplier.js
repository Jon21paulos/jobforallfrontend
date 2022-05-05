import React from "react";

import {Link,Avatar,Container,ImageList,ImageListItem,makeStyles,Typography,Divider,} from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
  
  const useStyles = makeStyles((theme) => ({
    container: {
      paddingTop: theme.spacing(10),
      position: "sticky",
      top: 0,
    },
    title: {
      fontSize: 16,
      fontWeight: 500,
      color: "#555",
    },
    link: {
      marginRight: theme.spacing(2),
      color: "#555",
      fontSize: 16,
    },
  }));
  
const FilterApplier = () => {
    const classes = useStyles();
    return (
      <Container className={classes.container}>
        <Typography className={classes.title} gutterBottom>
          Filter Applier
        </Typography>
        
      </Container>
    );
  };
  
  export default FilterApplier;