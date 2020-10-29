import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (   
    <>
      <Text fontWeight="bold" fontSize="subheading">Rate Repository Application</Text>
    </>  
  );
};

export default Main;