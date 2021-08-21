import React from 'react';
import { StyleSheet, View } from 'react-native';
import FormikTextInput from '../FormikTextInput';
import Button from '../Button';

const styles = StyleSheet.create({
  reviewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  error: {
    marginBottom: 20,
    height: 17.5,
  },
});


const ReviewContainer = ({ onSubmit }) => {
  return (
    <View style={styles.reviewContainer}>
      <>
        <FormikTextInput
          name="repositoryName"
          placeholder="RepositoryName"
          testID="repositoryNameField"
        />

        <FormikTextInput
          name="ownerName"
          placeholder="OwnerName"
          testID="ownerNameField"
        />

        <FormikTextInput
          name="rating"
          placeholder="Rating"
          testID="reviewRatingField"
        />

        <FormikTextInput
          name="text"
          placeholder="Text"
          testID="reviewText"
          multiline={true}
        />

        <Button text="Add Review" onPress={() => onSubmit()} />
      </>
    </View>
  );
};

export default ReviewContainer;
