import React from 'react';
import { useHistory } from 'react-router-dom';
import useSignIn from '../../hooks/useSignIn';
import useSignUp from '../../hooks/useSignUp';
import SignUpWrapper from './SignUpWrapper';

export const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    const username = values.username;
    const password = values.password;

    try {
      await signUp({ username, password });
      await signIn({ username, password });
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SignUpWrapper onSubmit={onSubmit} />
  );
};

export default SignUp;