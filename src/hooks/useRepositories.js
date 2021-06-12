import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {

  useQuery(GET_REPOSITORIES, {    
    fetchPolicy: 'cache-and-network',    
  });

  const { data, error, loading  } = useQuery(GET_REPOSITORIES); 
  return { repositories: data ? data.repositories : undefined, error, loading };
  
};


export default useRepositories;