import gql from 'graphql-tag';
export const USERS = gql`
query users{
    users{
    nom
    categorie
    statut
    date1
    date2
    date3
    photo
    numero
    }
}
`;

