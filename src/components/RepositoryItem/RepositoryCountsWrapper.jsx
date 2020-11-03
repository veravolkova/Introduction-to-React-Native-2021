import React from "react";
import { View, StyleSheet } from "react-native";

import RepositoryItemCounts from "./RepositoryItemCounts";

const styles = StyleSheet.create({
  mainContainer: {    
   display: "flex",   
   flexDirection: "row",    
   justifyContent: "space-between",
   padding: 5,   
  },    
});

const RepositoryCountsWrapper = ( { item } ) => {

  if (!item) {
    return null;
  }

  return (      

    <View style={styles.mainContainer}>  
        <RepositoryItemCounts count={item.stargazersCount} text={"Stars"} /> 
        <RepositoryItemCounts count={item.forksCount} text={"Forks"} />  
        <RepositoryItemCounts count={item.reviewCount}  text={"Reviews"} />      
        <RepositoryItemCounts count={item.ratingAverage} text={"Rating"} />              
    </View>            
    
  );
};

export default RepositoryCountsWrapper;