import React from 'react';

import InputField from '../../../../components/form-controls/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import {Avatar, Button, CssBaseline, FormControlLabel, Checkbox,  Typography, makeStyles, Container,  LinearProgress   } from '@material-ui/core';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PasswordField from '../../../../components/form-controls/PasswordField';


const schema = yup.object().shape({
   
   identifier: yup.string().required('Please enter your email').email('please enter a valid email'),
   password: yup.string().required('please enter your password').min(6, 'please enter at least 6 character'),
 

})

// RegisterForm.propTypes = {
//     onSubmit: propTypes.func,
// }


  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

function LoginForm(props) {
    const form = useForm({
        defaultValues: { 
          identifier: '',
            password : '',
        },
        resolver: yupResolver(schema)
    })
    const handleSubmit = async (values) => {
        const {onSubmit} = props;
        if (onSubmit) {
            await onSubmit(values)
        }
    }
    
    const {isSubmitting} = form.formState
    
    const classes = useStyles();
    return(
        <Container component="main" maxWidth="xs">
          
          
      <CssBaseline />
      <div className={classes.paper}>
      {isSubmitting && <LinearProgress />}
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
         
          <InputField
             name="identifier" label="Email" form={form}
          />
          <PasswordField   name="password" label="Password" form={form} />
         
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
          disabled={isSubmitting}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Create an account
          </Button>
         
        </form>
      </div>
     
    </Container>
    )
}

export default LoginForm;