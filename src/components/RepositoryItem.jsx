import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

const styles = StyleSheet.create({
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        overflow:'hidden'
    }
  });


const RepositoryItem = (props) => {

  if (!props.item) {
    return null;
  }

  return (   
    <View>
      <ListItem key={props.item.id} bottomDivider>   
      <Avatar source={{uri: props.item.ownerAvatarUrl}} style={styles.avatar}/> 
      <ListItem.Content>
          <ListItem.Title>{props.item.fullName}</ListItem.Title>
          <ListItem.Subtitle>{props.item.description}</ListItem.Subtitle>
        </ListItem.Content>                    
     </ListItem>  
    </View>
  );
};

export default RepositoryItem;




/*     id: 'django.django',
    fullName: 'django/django',
    description: 'The Web framework for perfectionists with deadlines.',
    language: 'Python',
    forksCount: 21015,
    stargazersCount: 48496,
    ratingAverage: 73,
    reviewCount: 5,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4', */