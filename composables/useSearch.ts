import { QueryParams } from '~/constants/query-params'

export function useSearch() {
    const route = useRoute()
    const router = useRouter()

    const search = computed({
        get() {
            return (route.query[QueryParams.Search] as string) || undefined
        },
        set(value) {
            router.push({
                query: Object.assign(
                    {},
                    {
                        ...route.query,
                        [QueryParams.Search]: value,
                        [QueryParams.Page]: 1,
                    }
                ),
            })
        },
    })

    return {
        search,
    }
}
