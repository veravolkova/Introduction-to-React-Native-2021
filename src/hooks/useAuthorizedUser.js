import { useQuery } from '@apollo/client';
import { AUTHORIZED_USER } from '../graphql/queries';

const useAuthorizedUser = (variables) => {  
  const { data, error, loading, refetch } = useQuery(AUTHORIZED_USER, {
    fetchPolicy: 'cache-and-network',
    variables
  });

  return { authorizedUser: data ? data.authorizedUser : undefined, error, loading, refetch };
};

export default useAuthorizedUser;
