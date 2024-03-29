import React from 'react';
import { StyleSheet, View } from 'react-native';
import FormikTextInput from '../FormikTextInput';
import Button from '../Button';

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


const SignInContainer = ({ onSubmit }) => {
  return (
    <View style={styles.signInContainer}>
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
          testID="passwordField"
        />

        <Button text="Sign in" onPress={() => onSubmit()} />
      </>
    </View>
  );
};

export default SignInContainer;
