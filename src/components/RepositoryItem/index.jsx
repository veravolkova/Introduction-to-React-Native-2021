import React from 'react';
import { useHistory } from 'react-router-dom';
import { View, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import RepositoryCountsWrapper from './RepositoryCountsWrapper';
import RepositoryItemAvatar from './RepositoryItemAvatar';
import RepositoryItemDesc from './RepositoryItemDesc';
import Button from '../Button';

import * as Linking from 'expo-linking';

// to do: get rid of overlapping avatar and desc
const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flex: 1,
    padding: 5,
  },
  descContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    marginTop: 10,
  },
});


const RepositoryItem = ({ item, all }) => {

  if (!item) {
    return null;
  }

  const history = useHistory();

  const redirectUrl = (url) => {
    console.log(url);
    Linking.openURL(url);
  };

  const redirectUrlReview = () => {
    history.push('/review');
  };

  return (
    <ListItem key={item.id} bottomDivider>
      <View style={styles.mainContainer}>
        <View style={styles.descContainer}>
          <RepositoryItemAvatar uri={item.ownerAvatarUrl} />                 
          <RepositoryItemDesc
            fullName={item.fullName}
            description={item.description}
            language={item.language}   
            style={{marginLeft: 60}}         
          />
        </View>
        <RepositoryCountsWrapper item={item} />
        {!all &&
          <View style={styles.buttonGroup}>
            <Button text="Open in GitHub" onPress={() => redirectUrl(item.url)} />
            <Button text="Write a review" onPress={() => redirectUrlReview()} />
          </View>
        }
      </View>
    </ListItem>
  );
};

export default RepositoryItem;


