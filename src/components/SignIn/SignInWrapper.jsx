import React from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { StyleSheet, View } from "react-native";

import SignInContainer from "./SignInContainer";

const styles = StyleSheet.create({
  signInContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  error: {
    marginBottom: 20,
    height: 17.5,
  },
});

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Username should contain at least 3 characters')    
    .required('Username is required'),
  password: yup
    .string()
    .min(3, 'Password should contain at least 3 characters')
    .required('Password is required'),
});

const initialValues = {
  username: "",
  password: "",
};

const SignInWrapper = ({ onSubmit }) => {
  return (
    <View style={styles.signInContainer}>
      <Formik 
        initialValues={initialValues} 
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        >    
       
        {({ handleSubmit }) => <SignInContainer onSubmit={handleSubmit}/>}      
      
      </Formik>
    </View>
  );
};

export default SignInWrapper;
