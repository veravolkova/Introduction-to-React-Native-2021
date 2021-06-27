import React from "react";
import { View, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import theme from "../../theme";

import RepositoryCountsWrapper from "./RepositoryCountsWrapper";
import RepositoryItemAvatar from "./RepositoryItemAvatar";
import RepositoryItemDesc from "./RepositoryItemDesc";
import Button from "../Button";

import * as Linking from 'expo-linking';

const styles = StyleSheet.create({
  mainContainer: {  
    // backgoroundColor: theme.colors.whiteBackground,    
    display: "flex",   
    flex:1,       
    padding: 5,
  },  
  descContainer: {   
    display: "flex",   
    flexDirection: "row",      
  }, 
  });


const RepositoryItem = ( { item, all } ) => {

  if (!item) {
    return null;
  }
  
  const redirectUrl = (url) => {    
    Linking.openURL(url);
  }; 

  return (   
    <ListItem key={item.id} bottomDivider> 
      <View style={styles.mainContainer}>    
        <View style={styles.descContainer}> 
          <RepositoryItemAvatar uri={item.ownerAvatarUrl}/>
          <RepositoryItemDesc 
            fullName={item.fullName} 
            description={item.description} 
            language={item.language}        
          />      
        </View>          
        <RepositoryCountsWrapper item={item} />
        { !all &&
        <Button text="Open in GitHub" onPress={() => redirectUrl(item.url)} />
        }
      </View>
    </ListItem> 
  );
};

export default RepositoryItem;


