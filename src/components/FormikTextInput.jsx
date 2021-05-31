import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

//https://scottdomes.com/react-native-sexy-forms/
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
      shadowOpacity: 0.23,
      shadowRadius: 2.62,      
      elevation: 4,
    },
    errorText: { 
      textAlign: 'center', 
      height: 17.5, 
      color: 'red',     
    },
    errorInput: { 
      height: 40,
      width: 300,
      paddingHorizontal: 5,
      backgroundColor: 'white',                
      marginBottom: 6,     
      borderRadius: 8, 
      borderColor: 'red',   
      borderWidth: 1,
    },    
  });


const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  //const inputContainer = [styles.inputContainer, showError ? styles.errorTextInput : styles.regularTextInput];

  return (
    <View style={styles.inputContainer}>    
  
     {!showError ?
      <TextInput
        style={styles.input}        
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}        
        value={field.value}        
        error={showError}        
        {...props}
      />      
      :  
      <>
      <TextInput
      style={styles.errorInput}        
      onChangeText={value => helpers.setValue(value)}
      onBlur={() => helpers.setTouched(true)}        
      value={field.value}        
      error={showError}
      {...props}
      />   
     <Text style={styles.errorText}>{meta.error}</Text>
     </>
     } 
      {/* {showError && <Text style={styles.errorText}>{meta.error}</Text>}     */}
  </View>
  );
};

export default FormikTextInput;