import React from 'react';
import { useHistory } from 'react-router-dom';
import useSignIn from '../../hooks/useSignIn';
import SignInWrapper from './SignInWrapper';


export const SignIn = () => {
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  const initialValues = {
    username: '',
    password: '',
  };
  

  return (
    <SignInWrapper onSubmit={onSubmit} initialValues={initialValues}/>
  );
};

export default SignIn;