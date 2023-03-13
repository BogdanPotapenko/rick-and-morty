import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { Query, QueryEpisodesArgs } from '~/types/generated/graphql'

const EpisodesQuery = gql`
  query episodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      info {
        count
        pages
      }
      results {
        id
        name
        air_date
        episode
      }
    }
  }
`

export function useEpisodesList(props?: QueryEpisodesArgs) {
  return useQuery<{ episodes: Query['episodes'] }, QueryEpisodesArgs>(
    EpisodesQuery,
    props
  )
}