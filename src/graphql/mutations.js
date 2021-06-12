import { gql } from '@apollo/client';

export const AUTHORIZE_USER = gql`
mutation {
    authorize(credentials: { username: "kalle", password: "password" }) {
      accessToken
   }
 }
`;

