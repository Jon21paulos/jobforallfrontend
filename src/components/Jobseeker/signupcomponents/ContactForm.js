import React from "react";

import { Typography,Grid, TextField,Button,Stepper,Step,StepLabel, Container} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useForm,Controller,FormProvider,useFormContext} from "react-hook-form";

const ContactForm = () => {
    const { control } = useFormContext();
    return (
      <>
       <Typography variant="h6" gutterBottom>
          Shipping address
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Controller
            control={control}
            name="phone"
            render={({ field }) => (
              <TextField
                id="phone"
                label="Phone"
                variant="outlined"
                placeholder="Enter Your Phone number"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
         </Grid>
        
        <Grid item xs={12} sm={6}>
          <Controller
            control={control}
            name="skills"
            render={({ field }) => (
              <TextField
                id="skills"
                label="Skills"
                variant="outlined"
                placeholder="Enter Your skills"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </Grid>
        
        
        <Grid item xs={12}>
          <Controller
            control={control}
            name="description"
            render={({ field }) => (
              <TextField
                id="description"
                label="description"
                variant="outlined"
                placeholder="Enter Your description"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </Grid>
      </Grid>
      </>
    );
  };
  
  export default ContactForm;