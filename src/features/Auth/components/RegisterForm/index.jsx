import React from 'react';
import propTypes from 'prop-types'
import InputField from '../../../../components/form-controls/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import {Avatar, Button, CssBaseline, FormControlLabel, Checkbox,  Typography, makeStyles, Container,  LinearProgress   } from '@material-ui/core';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PasswordField from '../../../../components/form-controls/PasswordField';


const schema = yup.object().shape({
   fullName: yup.string().required("please enter fullName")
   .test('should has at least two words', 'please enter at least two words', (value) =>{
       return value.split(' ').length >= 2
   }),
   email: yup.string().required('Please enter your email').email('please enter a valid email'),
   password: yup.string().required('please enter your password').min(6, 'please enter at least 6 character'),
   retypePassword: yup.string().required('please enter your password').oneOf([yup.ref('password')], 'password does not match')

})

RegisterForm.propTypes = {
    onSubmit: propTypes.func,
}


  
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

function RegisterForm(props) {
    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password : '',
            retypePassword: ''
          
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
            name="fullName" label="full Name" form={form}
          />
          <InputField
             name="email" label="Email" form={form}
          />
          <PasswordField   name="password" label="Password" form={form} />
          <PasswordField
             name="retypePassword" label="retype password" form={form}
          />
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

export default RegisterForm;