import React from "react";

import { Typography,Grid, TextField,Button,Stepper,Step,StepLabel, Container} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useForm,Controller,FormProvider,useFormContext} from "react-hook-form";

const ExprianceForm = () => {
    const { control } = useFormContext();
    return (
      <>
       <Typography variant="h6" gutterBottom>
          please fill your expriance
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Controller
            control={control}
            name="company_name"
            render={({ field }) => (
              <TextField
                id="company_name"
                label="Company Name"
                variant="outlined"
                placeholder="Company Name"
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
            name="job_title"
            render={({ field }) => (
              <TextField
                id="job_title"
                label="job_title"
                variant="outlined"
                placeholder="Job Title"
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
            name="start_and_end_date"
            render={({ field }) => (
              <TextField
                id="start_and_end_date"
                label="start_and_end_date"
                variant="outlined"
                placeholder="start and end_date"
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
            name="detail"
            render={({ field }) => (
              <TextField
                id="detail"
                label="detail"
                variant="outlined"
                placeholder="Detail"
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
  
  export default ExprianceForm;