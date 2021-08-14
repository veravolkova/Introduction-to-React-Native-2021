import { useQuery } from '@apollo/client';
import { AUTHORIZED_USER } from '../graphql/queries';

const useAuthorizedUser = () => {
  useQuery(AUTHORIZED_USER, {
    fetchPolicy: 'cache-and-network',
  });
  const { data, error, loading } = useQuery(AUTHORIZED_USER);
  return { authorizedUser: data ? data.authorizedUser : undefined, error, loading };
};


export default useAuthorizedUser;