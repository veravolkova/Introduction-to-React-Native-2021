import React from 'react';
import { useHistory } from 'react-router-dom';
import useSignIn from '../../hooks/useSignIn';

import SignInWrapper from './SignInWrapper';


const SignIn = () => { 
  const [signIn] = useSignIn();

  const history = useHistory();
  
  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log(data);
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (    
      <SignInWrapper onSubmit={onSubmit}/>           
  );
};

export default SignIn;