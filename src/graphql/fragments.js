import { gql } from '@apollo/client';

export const REPO_DETAILS = gql`
  fragment RepoDetails on Repository {
    id,
    fullName,
    ownerName,					
    ratingAverage,
    reviewCount
    forksCount,
    stargazersCount,
    description,
    language,
    ownerAvatarUrl,
  }
`;
