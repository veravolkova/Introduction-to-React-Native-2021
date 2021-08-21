import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useField } from 'formik';
import TextInput from './TextInput';
import Text from './Text';

// style source https://scottdomes.com/react-native-sexy-forms/
const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 300,
    paddingHorizontal: 5,
    backgroundColor: 'white',
    marginBottom: 6,
    borderRadius: 8,
  },
  inputContainer: {
    marginBottom: 20,
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.5,
    elevation: 4,
  },
  errorText: {
    textAlign: 'center',
    height: 17.5,
    color: '#d73a4a',
  },
  errorInput: {
    height: 40,
    width: 300,
    paddingHorizontal: 5,
    backgroundColor: 'white',
    marginBottom: 6,
    borderRadius: 8,
    borderColor: '#d73a4a',
    borderWidth: 2,
  },
});


const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={!showError ? styles.input : styles.errorInput}
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      <Text style={styles.errorText}>{meta.error}</Text>
    </View>
  );
};

export default FormikTextInput;