import React from 'react';
import LoginForm from '../components/loginForm';
const Login = props => {
    console.log("🚀 ~ file: login.js ~ line 5 ~ props", props)

    return (
        <div>

            <p>Login</p>
            <LoginForm />
           
        </div>
    );
};

Login.propTypes = {

};

export default Login;