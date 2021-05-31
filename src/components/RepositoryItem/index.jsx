import React from "react";
import { View, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import theme from "../../theme";

import RepositoryCountsWrapper from "./RepositoryCountsWrapper";
import RepositoryItemAvatar from "./RepositoryItemAvatar";
import RepositoryItemDesc from "./RepositoryItemDesc";

const styles = StyleSheet.create({
  mainContainer: {  
    backgoroundColor: theme.colors.whiteBackground,    
    display: "flex",   
    flex:1,       
    padding: 5,
  },  
  descContainer: {   
    display: "flex",   
    flexDirection: "row",      
  }, 
  });


const RepositoryItem = ( { item } ) => {

  if (!item) {
    return null;
  }

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
      </View>
    </ListItem> 
  );
};

export default RepositoryItem;


