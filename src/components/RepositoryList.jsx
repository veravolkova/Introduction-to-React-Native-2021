import React from 'react';
import { FlatList, View, StyleSheet } from "react-native";

import useRepositories from '../hooks/useRepositories';
import RepositoryItem from "./RepositoryItem/index";

const styles = StyleSheet.create({
  separator: {
    height: 5,    
  },
});

const RepositoryList = () => {
  const { repositories } = useRepositories();
  const repositoryNodes = repositories
  ? repositories.edges.map(edge => edge.node)
  : [];

const ItemSeparator = () => <View style={styles.separator} />;

return (
  <FlatList 
    data={repositoryNodes}  
    ItemSeparatorComponent={ItemSeparator}    
    renderItem={({ item }) => <RepositoryItem item={item} />}
  />
  );
};

export default RepositoryList;