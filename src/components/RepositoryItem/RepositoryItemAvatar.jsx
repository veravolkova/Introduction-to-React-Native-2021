import React from "react";
import { StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";

const styles = StyleSheet.create({  
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow:"hidden",
    marginRight: 10,
    }
  });


const RepositoryItemAvatar = ({ uri }) => {

  if (!uri) {
    //to do: implement default pic
    return null;
  }

  return (       
      <Avatar source={{ uri:uri }} style={styles.avatar}/>       
  );
};

export default RepositoryItemAvatar;
