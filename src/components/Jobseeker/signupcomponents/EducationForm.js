import React from "react";

import { Typography,Grid, TextField,Button,Stepper,Step,StepLabel, Container} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useForm,Controller,FormProvider,useFormContext} from "react-hook-form";

const EducationForm = () => {
    const { control } = useFormContext();
    return (
      <>
        <Typography variant="h6" gutterBottom>
            Educational level
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Controller
            control={control}
            name="degree"
            render={({ field }) => (
              <TextField
                id="degree"
                label="Degree"
                variant="outlined"
                placeholder="Course/Degree"
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
            name="grade"
            render={({ field }) => (
              <TextField
                id="grade"
                label="Grade"
                variant="outlined"
                placeholder="Score/Grade"
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
            name="year"
            render={({ field }) => (
              <TextField
                id="year"
                label="Year"
                variant="outlined"
                placeholder="Year"
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
            name="tempo"
            render={({ field }) => (
              <TextField
                id="tempo"
                label="Tempo"
                variant="outlined"
                placeholder="Tempo"
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
  
  export default EducationForm