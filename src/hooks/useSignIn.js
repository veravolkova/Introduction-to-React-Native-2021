import { useMutation, useApolloClient } from '@apollo/client';

import useAuthStorage from './useAuthStorage';
import { AUTHORIZE_USER } from '../graphql/mutations';


const useSignIn = () => {    
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();

    const [mutate, result] = useMutation(AUTHORIZE_USER);

    const signIn = async ({ username, password }) => {  
        const { data } = await mutate({ variables: { username, password } });
        await authStorage.setAccessToken(data.authotize.accessToken);
        apolloClient.resetStore();  
    };
  
    return [signIn, result];
};

export default useSignIn;







