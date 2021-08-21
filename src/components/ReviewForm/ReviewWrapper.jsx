import React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import { StyleSheet, View } from 'react-native';

import ReviewContainer from './ReviewContainer';

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
  ownerName: yup
    .string()
    .min(3, 'Owner\'s name should contain at least 3 characters')
    .required('Repository owner\'s username is a required string'),
  repositoryName: yup
    .string()
    .min(3, 'Repository name should contain at least 3 characters')
    .required('Repository name is a required string'),
  rating: yup
    .number()
    .min(0, 'Rating is a required number between 0 and 100')
    .max(100, 'Rating is a required number between 0 and 100')
    .required('Rating is required'),
  text: yup
    .string()
    .min(3, 'Review text should contain at least 5 characters')
});

const initialValues = {
  repositoryName: '',
  ownerName: '',
  rating: '',
  text: '',
};

const ReviewWrapper = ({ onSubmit }) => {
  return (
    <View style={styles.signInContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >

        {({ handleSubmit }) => <ReviewContainer onSubmit={handleSubmit} />}

      </Formik>
    </View>
  );
};

export default ReviewWrapper;
