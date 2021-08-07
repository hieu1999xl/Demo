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
    const {errors } = form 
    const hasError = errors[name]  ;
    console.log(errors[name])
    return (
        <Controller 
        name={name}
        control={form.control}
        as={TextField}
        margin="normal"
        variant="outlined"
        fullWidth
        label={label}
        disabled={disabled}
        error={!!hasError}
        helperText={errors[name]?.message}
         />
    )
}

export default InputField;
