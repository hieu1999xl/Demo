import React from 'react';
import RegisterForm from '../RegisterForm';


function Register(props) {
    const handleSumit = (values) => {
        console.log(values)
    }
    return (
        <RegisterForm onSubmit={handleSumit} />
    )
}

export default Register