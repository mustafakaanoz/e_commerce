import React from 'react';
import { Controller } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';

const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        render={({ field }) =>
          <TextField
            label={label}
            required
            fullWidth
          />}
        name={name}
        control={control}


      />
    </Grid>
  );
}

export default FormInput;