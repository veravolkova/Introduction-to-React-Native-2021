import { useMutation, useApolloClient } from '@apollo/client';
import { useContext } from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { useHistory } from 'react-router-dom';
import { AUTHORIZE_USER } from '../graphql/mutations';


const useSignIn = () => {
    const authStorage = useContext(AuthStorageContext);
    const apolloClient = useApolloClient();
    const history = useHistory();

    const [mutate, result] = useMutation(AUTHORIZE_USER, { 
        onError: (error) => { console.log(error.graphQLErrors[0].message); } 
    });

    const signIn = async ({ username, password }) => {
        const { data } = await mutate({ variables: { username, password } });
        try {
            await authStorage.setAccessToken(data.authorize.accessToken);
        }
        catch (e) {
            console.log(e);
        }
        apolloClient.resetStore();
        history.push('/');
    };

    return [signIn, result];
};

export default useSignIn;







