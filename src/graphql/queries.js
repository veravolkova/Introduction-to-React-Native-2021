import { gql } from '@apollo/client';


export const GET_REPOSITORIES = gql`
  query ($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) { 
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
          createdAt
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
      ownerName
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

export const AUTHORIZED_USER = gql`
  query {
    authorizedUser {
      id
      username
  }
}
`;


