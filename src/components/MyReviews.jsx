import React from 'react';
import Button from './Button';
import useAuthorizedUser from '../hooks/useAuthorizedUser';
import ReviewItem from './ReviewItem';
import { Alert, FlatList, View, StyleSheet } from 'react-native';
import { useMutation } from '@apollo/client';
import { DELETE_REVIEW } from '../graphql/mutations';
import { useHistory } from 'react-router-dom';

const styles = StyleSheet.create({
  separator: {
    height: 5,
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    marginTop: 10,
  },
});

//to do - text component
const MyReviews = () => {
  const [deleteReview] = useMutation(DELETE_REVIEW);
  const { authorizedUser, refetch } = useAuthorizedUser({ includeReviews: true });

  const history = useHistory();

  const redirectUrl = (id) => {
    history.push(`/repository/${id}`);
  };

  const createAlert = () =>
    Alert.alert(
      'Delete review',
      'Are you sure you want to delete this review',
      [
        {
          text: 'Cancel',
          onPress: () => false,
          style: 'cancel'
        },
        { text: 'OK', onPress: () => true }
      ]
    );

  // alert is switched of for testing in browser
  const handleDelete = async (id) => {
    // const result = createAlert(); 
    // if(result) {        
    await deleteReview({ variables: { id } });
    refetch();
    // };
  };

  const ItemSeparator = () => <View style={styles.separator} />;
  if (!authorizedUser) {
    return null;
  }

  if (authorizedUser) {
    return (
      <FlatList
        ItemSeparatorComponent={ItemSeparator}
        data={authorizedUser.reviews.edges}       
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <View>
            <ReviewItem item={item} myReview={true} />
            <View style={styles.buttonGroup}>
              <Button style={{ width: 50 }} text="View Repository" onPress={() => redirectUrl(item.node.repository.id)} />
              <Button style={{ width: 50 }} text="Delete review" onPress={() => handleDelete(item.node.id)} />
            </View>
          </View>
        )}
      />
    );
  }
};

export default MyReviews;

