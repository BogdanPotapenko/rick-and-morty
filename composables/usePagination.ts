import { QueryParams } from '~/constants/query-params'

export function usePagination() {
    const route = useRoute()
    const router = useRouter()

    const page = computed({
        get() {
            return Number(route.query[QueryParams.Page]) || 1
        },
        set(value) {
            router.push({
                query: Object.assign(
                    {},
                    {
                        ...route.query,
                        [QueryParams.Page]: value
                    }
                ),
            })
        },
    })

    return {
        page
    }
}