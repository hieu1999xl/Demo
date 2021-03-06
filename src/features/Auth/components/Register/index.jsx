import React from 'react';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm';
import {register} from '../../userSlice'
import { useSnackbar } from 'notistack';



// Register.propTypes = {
//     closeDialog: propTypes.func
// }

function Register(props) {
    const dispatch = useDispatch()
    const {enqueueSnackbar} = useSnackbar()
    const handleSumit = async (values) => {
        try {
        values.username = values.email

        const action = register(values)
        const resultAction = await dispatch(action)
        const user = unwrapResult(resultAction)

        //close dialog
        const {closeDialog} = props
        if (closeDialog) {
            closeDialog()
        }

        // Todo something
        console.log(user)
        enqueueSnackbar('Register successfully', {variant: 'success'})
        } catch (error) {
            console.log('Lỗi rồi này, a hi hi', error)
            enqueueSnackbar(error.message, {variant: 'error'})
        }
    }
    return (
        <RegisterForm onSubmit={handleSumit} />
    )
}

export default Register