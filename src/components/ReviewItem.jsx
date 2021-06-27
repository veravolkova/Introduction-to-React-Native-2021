import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

import Text from '../components/Text';

const styles = StyleSheet.create({
  mainContainer: {      
    display: 'flex',   
    flex:1,       
    padding: 5,
  },  
  circle: {
    borderRadius: 20,
    width: 40,
    height: 40,
    borderWidth: 2,
    borderColor: 'blue', 
    justifyContent: 'center', 
    alignItems: 'center',
    marginBottom: 5,
  },
  reviewExtra: {    
      display: 'flex',   
      flexDirection: 'row',    
      justifyContent: 'space-between',
      padding: 5,   
      marginTop: 10,
     },    
  });

const formatDate = (dateToConvert) => {
    const date = new Date(dateToConvert);
    return date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate();   
};


const ReviewItem = ( { item } ) => {

  if (!item) {
    return null;
  } 
  
  return (  
        <ListItem key={item.node.id} bottomDivider> 
            <View style={styles.mainContainer}>
                <View style={styles.circle}> 
                    <Text  fontWeight="bold" fontSize="subheading">{item.node.rating}</Text> 
                </View>     
              
                <View> 
                    <Text  fontWeight="bold" fontSize="subheading">{item.node.user.username}</Text>                        
                    <Text>{formatDate(item.node.createdAt)}</Text>  
                    <br/>            
                    <Text>{item.node.text}</Text>            
                </View> 
            </View>
        </ListItem>  
  );
};

export default ReviewItem;