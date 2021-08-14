import { useMutation } from '@apollo/client';
import { DELETE_REVIEW } from '../graphql/mutations';
import { GET_REPOSITORY } from '../graphql/queries';


const useDeleteReview = () => {
    const [mutate] = useMutation(DELETE_REVIEW, {
        refetchQueries: [{ query: GET_REPOSITORY }]
    });

    const deleteReview = async ({ id }) => {
        await mutate({ variables: { id } });
    };
    return [deleteReview];
};

export default useDeleteReview;

