import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback} from "react-native";

import theme from "../theme";

const styles = StyleSheet.create({
  flexContainer: {     
    display: "flex",     
    backgroundColor: theme.colors.darkBackground,
  },  
});

const AppBarTab = () => {
  return (    
    <View style={styles.flexContainer}>
      <TouchableWithoutFeedback onPress={() => alert("Pressed!")}>  
          <></>      
      </TouchableWithoutFeedback>
    </View> 
  );
};

export default AppBarTab;



     
     