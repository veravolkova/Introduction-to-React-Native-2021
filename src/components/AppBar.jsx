import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";

import AppBarTab from "./AppBarTab";

import theme from "../theme";

const styles = StyleSheet.create({
  appBarContainer: {
    display: "flex",       
    flexDirection:"row",    
    height: 75,
    backgroundColor: theme.colors.darkBackground,    
  },  
});

const AppBar = () => {
  return (   
    <View style={styles.appBarContainer} >   
      <ScrollView horizontal>      
      <AppBarTab text="Repositories" link="/"/> 
      <AppBarTab text="Sign In" link="/signin" />        
     </ScrollView>   
    </View> 
  );
};

export default AppBar;

