import React from 'react';
import SignIn from '../../components/signin/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './sign-in-and-sign-up.styles.scss';


const SignInAndSignUpPage = () => (
    <div className='sing-in-and-sing-up'>
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndSignUpPage;

