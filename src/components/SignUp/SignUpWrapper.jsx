import React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import { StyleSheet, View } from 'react-native';
import SignUpContainer from './SignUpContainer';

const styles = StyleSheet.create({
  signInContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    .min(1, 'Username should contain at least 3 characters')
    .max(30, 'Username should contain 30 characters at maximum')
    .required('Username is required'),
  passwordConfirmed: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Password confirm is required'),
  password: yup
    .string()
    .min(5, 'Password should contain at least 5 characters')
    .max(50, 'Password should contain 50 characters at maximum')
    .required('Password is required')
});

const initialValues = {
  username: '',
  password: '',
  passwordConfirmed: '',
};


const SignUpWrapper = ({ onSubmit }) => {
  return (
    <View style={styles.signInContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >

        {({ handleSubmit }) => <SignUpContainer onSubmit={handleSubmit} />}

      </Formik>
    </View>
  );
};

export default SignUpWrapper;
