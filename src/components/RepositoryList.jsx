import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem/index';
import { Picker } from '@react-native-picker/picker';
import { Searchbar } from 'react-native-paper';
import { useDebouncedCallback } from 'use-debounce';

const styles = StyleSheet.create({
  separator: {
    height: 5,
  },
});

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const ItemSeparator = () => <View style={styles.separator} />;
  const history = useHistory();

  const onPress = (item) => {
    history.push(`/repository/${item.id}`);
  };

  return (
    <FlatList
      data={repositoryNodes}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onPress(item)}>
          <RepositoryItem item={item} all={true} />
        </TouchableOpacity>
      )}
    />
  );
};

const RepositoryList = (all) => {
  const [sortBy, setSortBy] = useState('CREATED_AT,DESC');
  const orderCriteria = sortBy.split(',');

  const [searchQuery, setSearchQuery] = useState('');

  // Debounce callback
  const onChangeSearch = useDebouncedCallback(
    (value) => {
      setSearchQuery(value);
    },
    // delay in ms
    300
  );

  const { repositories } = useRepositories({
    orderBy: orderCriteria[0],
    orderDirection: orderCriteria[1],
    searchKeyword: searchQuery,
  });

  return (
    // to do: style picker
    <>
      <Picker
        selectedValue={sortBy}
        style={{ height: 50 }}
        mode={'dialog'}
        onValueChange={(itemValue) =>
          setSortBy(itemValue)
        }>
        <Picker.Item label="Latest repositories" value="CREATED_AT,DESC" />
        <Picker.Item label="Highest rated repositories" value="RATING_AVERAGE,DESC" />
        <Picker.Item label="Lowest rated repositories" value="RATING_AVERAGE,ASC" />
      </Picker>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <RepositoryListContainer repositories={repositories} all={all} />;
    </>
  );
};

export default RepositoryList;

