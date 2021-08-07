import React from 'react';
import propTypes from 'prop-types'
import InputField from '../../../../components/form-controls/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
    title: yup.string().required('Please enter title').min(5, 'title is too short'),
})

TodoForm.propTypes = {
    onSubmit: propTypes.func,
}

function TodoForm(props) {
    const form = useForm({
        defaultValues: {
            title: '',
        },
        resolver: yupResolver(schema)
    })
    const handleSubmit = (values) => {
        const {onSubmit} = props;
        if (onSubmit) {
            onSubmit(values)
        }
        form.reset()
    }
    return(
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name="title" label="Todo" form = {form} />
        </form>
    )
}

export default TodoForm;