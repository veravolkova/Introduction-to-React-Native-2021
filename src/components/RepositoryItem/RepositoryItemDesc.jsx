import React from "react";
import { View, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";

import Text from "../../components/Text";

import theme from "../../theme";

const styles = StyleSheet.create({    
  languageTag: {
    backgroundColor: theme.colors.blueBackground,
    marginTop: 5,
    padding: 4,
    borderRadius: 3,
  },   
});

const RepositoryItemDesc = ({ fullName, description, language }) => {
 return (    
    <View>
    <ListItem.Content>
    <ListItem.Title>{fullName}</ListItem.Title>
    <ListItem.Subtitle>{description}</ListItem.Subtitle>          
    <Text 
      style={styles.languageTag}            
      fontSize="subheading" 
      color="darkBackground"
     >
       {language}
    </Text>   
  </ListItem.Content>        
  </View>
  );
};

export default RepositoryItemDesc;