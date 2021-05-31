import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
//https://scottdomes.com/react-native-sexy-forms/

import Text from './Text';
import theme from "../theme";

const styles = StyleSheet.create({
  btnContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: theme.colors.blueBackground,
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    width: 300,
    elevation: 4,
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 80,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

//to do - text component
const Button = ({ text, onPress }) => {
    return (             
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.btnContainer}>  
            <Text style={styles.text}>{text}</Text>            
        </View>
      </TouchableWithoutFeedback>  
    );
};

export default Button;

