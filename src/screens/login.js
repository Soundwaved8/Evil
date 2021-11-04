import React from 'react';
import LoginForm from '../components/loginForm';
import styled from 'styled-components';

const Login = props => {
    console.log("🚀 ~ file: login.js ~ line 5 ~ props", props)

    return (
        <div>

            <StyledP>Login</StyledP>
            <LoginForm />
           
        </div>
    );
};

Login.propTypes = {

};

export default Login;

const StyledP = styled.p`
   font-family: Zen Antique;
   color:white;
   font-size:35px;
`