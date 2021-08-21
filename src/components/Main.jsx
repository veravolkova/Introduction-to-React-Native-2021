import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import RepositorySingle from './RepositorySingle';
import SignIn from './SignIn/index';
import SignUp from './SignUp/index';
import CreateReview from './ReviewForm/index';
import MyReviews from './MyReviews';

import theme from '../theme';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.mainContainer}>
      <AppBar />
      <Switch>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/signin" exact>
          <SignIn />
        </Route>        
        <Route path="/" exact>
          <RepositoryList all={true} />
        </Route>
        <Route path="/repository/:id" >
          <RepositorySingle all={false} />
        </Route>
        <Route path="/myreviews">
          <MyReviews />
        </Route>
        <Route path="/review" exact>
          <CreateReview />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;
