import { gql } from 'apollo-boost';

export const gqlUser = gql`
    query {
        users {
            id
            firstName
        }
    }
`
