import { QueryParams } from '~/constants/query-params'

export function useCharactersFilters() {
  const route = useRoute()
  const router = useRouter()

  const status = computed({
    get() {

      return (route.query[QueryParams.Status] as string) || undefined
    },
    set(value) {
      router.push({
        query: Object.assign({}, {
          ...route.query,
          [QueryParams.Status]: value,
          [QueryParams.Page]: 1,
        }),
      })
    },
  })

  const gender = computed({
    get() {

      return (route.query[QueryParams.Gender] as string) || undefined
    },
    set(value) {
      router.push({
        query: Object.assign(
          {},
          {
            ...route.query,
            [QueryParams.Gender]: value,
            [QueryParams.Page]: 1,
          }
        ),
      })
    },
  })

  return {
    status,
    gender
  }
}
