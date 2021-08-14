import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import RepositoryCountsWrapper from './RepositoryCountsWrapper';
import RepositoryItemAvatar from './RepositoryItemAvatar';
import RepositoryItemDesc from './RepositoryItemDesc';
import Button from '../Button';

import * as Linking from 'expo-linking';

const styles = StyleSheet.create({
  mainContainer: {
    // backgoroundColor: theme.colors.whiteBackground,    
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

  const redirectUrl = (url) => {
    console.log(url);
    Linking.openURL(url);
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
          />
        </View>
        <RepositoryCountsWrapper item={item} />
        {!all &&
          <View style={styles.buttonGroup}>
            <Button text="Open in GitHub" onPress={() => redirectUrl(item.url)} />
            <Button text="Write a review" onPress={() => redirectUrl('/review')} />
            {/* redirectUrl(`/${item.id}/review`)} */}
          </View>
        }
      </View>
    </ListItem>
  );
};

export default RepositoryItem;


