import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { Character } from "~/types/generated/graphql";

const CharacterQuery = gql`
  query character($id: ID!) {
    character(id: $id) {
        name
        image
        status
        id
        species
        location {
          name
        }
      }
  }`;

export function useCharacterDetails(props: { id: any }) {
  return useQuery<Character>(CharacterQuery, {
    id: props.id,
  });
}