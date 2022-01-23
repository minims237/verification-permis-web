import gql from 'graphql-tag';
export const NEWUSER = gql`
  mutation NewUser(
    $nom: String!
    $categorie: String!
    $statut: String!
    $date1: String!
    $date2: String!
    $date3: String!
    $photo: [Upload!]!
    $numero:String!
  ) {
    NewUser(
    nom:$nom
    categorie:$categorie
    statut:$statut
    date1: $date1
    date2: $date2
    date3: $date3
    photo: $photo
    numero:$numero
    ) {
      nom
    }
  }
`;
