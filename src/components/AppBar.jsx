import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import AppBarTab from './AppBarTab';
import theme from '../theme';
import Text from '../components/Text';
import useAuthorizedUser from '../hooks/useAuthorizedUser';
import useSignOut from '../hooks/useSignOut';

const styles = StyleSheet.create({
  appBarContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: 75,
    backgroundColor: theme.colors.darkBackground,
  },
});


const AppBar = () => {

  const { authorizedUser } = useAuthorizedUser();

  return (
    <View style={styles.appBarContainer} >
      <ScrollView horizontal>
        <AppBarTab text="Repositories" link="/" />
        {!authorizedUser ?
          <>                     
            <AppBarTab text="Sign In" link="/signin" />
            <AppBarTab text="Sign Up" link="/signup" />
          </>
          :
          <>           
            <AppBarTab text="Create review" link="/review" />
            <AppBarTab text="MyReviews" link="/myreviews" />                        
            <AppBarTab text="Sign Out" link="/" onClick={useSignOut()} />
            <Text style={{ marginLeft: 'auto' }}>Hello {authorizedUser.username}</Text>
          </>
        }
      </ScrollView>
    </View>
  );
};

export default AppBar;

