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
          url,
        }
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  query ($id: ID!) {
    repository(id: $id) {
      id
      fullName
    	description
    	language
    	stargazersCount
    	forksCount
      reviewCount
      ratingAverage
      url
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
           }
        }
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

