import { gql } from '@apollo/client';

// to do: use fragments

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
  query ($id: ID!, $first:  Int,  $after: String) {
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
      reviews(first: $first, after: $after) {
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
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }
`;

export const AUTHORIZED_USER = gql`
  query getAuthorizedUser($includeReviews: Boolean = false) {
    authorizedUser {
      id
      username     
      reviews @include(if: $includeReviews) {
        edges {
          node {
            repository {
              id
              fullName                       
            }
            id
            text
            rating
            createdAt           
          }         
        }       
      }
    }
  }
`;