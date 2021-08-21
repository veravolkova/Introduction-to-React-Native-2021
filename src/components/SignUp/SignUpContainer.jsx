import React from 'react';
import { StyleSheet, View } from 'react-native';
import FormikTextInput from '../FormikTextInput';
import Button from '../Button';

const styles = StyleSheet.create({
  signUpContainer: {
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


const SignUpContainer = ({ onSubmit }) => {
  return (
    <View style={styles.signUpContainer}>
      <>
        <FormikTextInput
          name="username"
          placeholder="Username"
          testID="usernameField"
        />

        <FormikTextInput
          name="password"
          placeholder="Password"
          secureTextEntry
          testID="passwordInitial"
        />

        <FormikTextInput
          name="passwordConfirmed"
          placeholder="Confirm Password"
          secureTextEntry
          testID="passwordConfirmed"
        />

        <Button text="Sign up" onPress={() => onSubmit()} />
      </>
    </View>
  );
};

export default SignUpContainer;
