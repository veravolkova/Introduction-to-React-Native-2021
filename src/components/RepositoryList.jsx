import React from 'react';
import { useHistory } from 'react-router-dom';
import { FlatList, View, StyleSheet, TouchableOpacity  } from 'react-native';

import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem/index';

const styles = StyleSheet.create({
  separator: {
    height: 5,    
  },
});

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : []; 
  
  /*   const repository = useQuery(GET_REPOSITORY, {    
        fetchPolicy: 'cache-and-network',    
    });
   */

  const ItemSeparator = () => <View style={styles.separator} />;
  const history = useHistory();

  const onPress = (item) => {  
    history.push(`/repository/${item.id}`);
    console.log('pushed');
  };

  return (
    <FlatList 
      data={repositoryNodes}  
      ItemSeparatorComponent={ItemSeparator}    
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onPress(item)}>
          <RepositoryItem item={item} all={true}/>
        </TouchableOpacity>
      )}
    />
  );
};

const RepositoryList = (all) => {
  const { repositories } = useRepositories();

  return <RepositoryListContainer repositories={repositories} all={all} />;
};

export default RepositoryList;

