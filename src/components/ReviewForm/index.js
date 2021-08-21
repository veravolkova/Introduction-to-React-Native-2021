import React from 'react';
import { useHistory } from 'react-router-dom';
import useCreateReview from '../../hooks/useCreateReview';
import ReviewWrapper from './ReviewWrapper';

export const CreateReview = () => {
  const [createReview] = useCreateReview();
  const history = useHistory();

  const onSubmit = async (values) => {

    const repositoryName = values.repositoryName;
    const ownerName = values.ownerName;
    const rating = Number(values.rating);
    const text = values.text;

    try {
      await createReview({ repositoryName, ownerName, rating, text });
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ReviewWrapper onSubmit={onSubmit} />
  );
};

export default CreateReview;