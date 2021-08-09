import React from 'react';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import LoginForm from '../LoginForm';
import {login} from '../../../Auth/userSlice'
import { useSnackbar } from 'notistack';



// Register.propTypes = {
//     closeDialog: propTypes.func
// }

function Login(props) {
    const dispatch = useDispatch()
    const {enqueueSnackbar} = useSnackbar()
    const handleSumit = async (values) => {
        try {
        

        const action = login(values)
        const resultAction = await dispatch(action)
        const user = unwrapResult(resultAction)

        //close dialog
        const {closeDialog} = props
        if (closeDialog) {
            closeDialog()
        }

        // Todo something
        console.log(user)
        enqueueSnackbar('Login successfully', {variant: 'success'})
        } catch (error) {
            console.log('Lỗi rồi này, a hi hi', error)
            enqueueSnackbar(error.message, {variant: 'error'})
        }
    }
    return (
        <LoginForm onSubmit={handleSumit} />
    )
}

export default Login