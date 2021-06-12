import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback} from "react-native";
import { Link } from "react-router-native";

import Text from "./Text";

const styles = StyleSheet.create({
  tabContainer: {
    padding: 10,
  },
});


const AppBarTab = ( { text, link, onClick } ) => {

    return (    

    <View style={styles.tabContainer}>
    <Link    
      to={link}
      component={TouchableWithoutFeedback}  
      onPress={onClick}
    >
    <Text                      
          fontWeight="bold" 
          fontSize="subheading" 
          color="darkBackground">
          {text}
        </Text>    
    </Link> 
    </View>     
  );
};

export default AppBarTab;



     
     