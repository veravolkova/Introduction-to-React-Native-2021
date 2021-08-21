import React from 'react';
import { useParams } from 'react-router-native';
import useRepository from '../hooks/useRepository';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem/index';
import ReviewItem from './ReviewItem';
import Text from '../components/Text';

const styles = StyleSheet.create({
  separator: {
    height: 5,
  },
});

const RepositorySingle = () => {

  const { id } = useParams();
  const { repository, fetchMore } = useRepository({ id, first: 3 });

  const ItemSeparator = () => <View style={styles.separator} />;

  const onEndReach = () => {
    fetchMore();   
  };

  if (!repository) {
    return null;
  }

  return (
    <View>
      <FlatList
        ItemSeparatorComponent={ItemSeparator}
        data={repository.reviews.edges}  
        keyExtractor={({ id }) => id}     

        ListHeaderComponent={() =>
          <View>
            <RepositoryItem item={repository} all={false} />
            <Text fontWeight="bold" fontSize="subheading"> Repository Reviews </Text>
          </View>
        }
        renderItem={({ item }) => (
          <ReviewItem item={item} myReview={false} />
        )}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

export default RepositorySingle;

