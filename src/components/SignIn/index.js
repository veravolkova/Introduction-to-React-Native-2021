import React from 'react';

import SignInWrapper from './SignInWrapper';


const SignIn = () => { 
  
  const onSubmit = async (values) => {
    console.log(values);
  };

  return (    
      <SignInWrapper onSubmit={onSubmit}/>           
  );
};

export default SignIn;
