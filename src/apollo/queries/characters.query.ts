import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query GetCharacters(
    $name: String
    $status: String
    $species: String
    $gender: String
    $origin: String
  ) {
    characters(
      name: $name
      status: $status
      species: $species
      gender: $gender
      origin: $origin
    ) {
      id
      name
      status
      species
      type
      gender
      origin
      location
      image
      episode
      url
      created
    }
  }
`;