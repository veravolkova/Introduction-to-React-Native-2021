import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
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
      }
    }
  }
`;

/* export const AUTHORIZE = gql`
  query {
    users {
      edges {
        node {
          username        
      }
    }
  }
}
`; */

export const AUTHORIZED_USER = gql`
  query {
    authorizedUser {
      id
      username
  }
}
`;



// other queries...

