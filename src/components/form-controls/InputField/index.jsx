import React from 'react'
import propTypes from 'prop-types'
import { TextField } from '@material-ui/core'
import { Controller } from 'react-hook-form'

InputField.propTypes = {
    form: propTypes.object.isRequired,
    name: propTypes.string.isRequired,

    label: propTypes.string,
    disabled: propTypes.bool,

}

function InputField(props) {
    const {form, name, label, disabled} =props
    const {errors, formState} = form 
    const hasError = formState.touched[name] && errors[name];
    console.log(errors[name], formState[name])
    return (
        <Controller 
        name={name}
        control={form.control}
        as={TextField}
        fullWidth
        label={label}
        disabled={disabled}
        error={hasError}
        helperText="lỗi rồi này a hi hi"
         />
    )
}

export default InputField;
