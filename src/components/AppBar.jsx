import React from "react";
import { View, StyleSheet } from "react-native";

import AppBarTab from "./AppBarTab";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  flexContainer: {
    display: "flex",     
    height: 50,
    backgroundColor: theme.colors.darkBackground,
  },
  flexText: {
    flexGrow: 1,
    paddingTop: 20,
    marginLeft: 20,  
  },  
});

const AppBar = () => {
  return (   
    <View style={styles.flexContainer}>       
        <Text 
            style={styles.flexText}
            fontWeight="bold" 
            fontSize="subheading" 
            color="darkBackground">
            Repositories
        </Text>            
      <AppBarTab/>  
    </View>
  );
};

export default AppBar;

