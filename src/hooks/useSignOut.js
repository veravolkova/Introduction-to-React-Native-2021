import { useApolloClient } from '@apollo/client';

import useAuthStorage from './useAuthStorage';
//import { useHistory } from 'react-router-dom';


const useSignOut = () => {    
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();

    //const history = useHistory();

    const signOut = async () => {     
        console.log('called');   
        await authStorage.removeAccessToken();
        apolloClient.resetStore();  
        //history.push('/');
    };
  
    return signOut;
};

export default useSignOut;
