import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { Query, QueryCharactersArgs } from '~/types/generated/graphql'

const CharactersQuery = gql`
  query characters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
      }
      results {
        id
        name
        status
        image
        gender
      }
    }
  }
`

export function useCharactersList(props?: QueryCharactersArgs) {
  return useQuery<{ characters: Query['characters'] }, QueryCharactersArgs>(
    CharactersQuery,
    props
  )
}