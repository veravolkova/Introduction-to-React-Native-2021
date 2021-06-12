import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";

import AppBarTab from "./AppBarTab";

import theme from "../theme";
import useAuthorizedUser from "../hooks/useAuthorizedUser";
import useSignOut from "../hooks/useSignOut"; 


const styles = StyleSheet.create({
  appBarContainer: {
    display: "flex",       
    flexDirection:"row",    
    height: 75,
    backgroundColor: theme.colors.darkBackground,    
  },  
});

const AppBar = () => {

  const { authorizedUser } = useAuthorizedUser();
  const { signOut } = useSignOut();


  return (   
    <View style={styles.appBarContainer} >   
      <ScrollView horizontal>      
      <AppBarTab text="Repositories" link="/"/> 
      {!authorizedUser ?
      <AppBarTab text="Sign In" link="/signin" /> :
      <AppBarTab text="Sign Out" link="/signin" onPress={signOut}/>}
     </ScrollView>   
    </View> 
  );
};

export default AppBar;

