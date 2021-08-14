import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  regularTextInput: {
    borderColor: theme.colors.textPrimary,
  },
  errorTextInput: {
    borderColor: theme.colors.textError,
  }
});

const TextInput = ({ style, error, ...props }) => {

  const textInputStyle = [style, styles.regularTextInput, error && styles.errorTextInput];

  return <NativeTextInput style={textInputStyle} {...props} />;

};

export default TextInput;