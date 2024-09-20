import {
	createApi,
	fetchBaseQuery,
	FetchBaseQueryError,
	retry,
} from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../utils/server'

// const navigate = useNavigate()

// const baseQuery = fetchBaseQuery({
// 	baseUrl: `${BASE_URL}`,
// 	credentials: 'include',
// })

const baseQuery = fetchBaseQuery({
	baseUrl: `${BASE_URL}`,
	credentials: 'include',
})

const baseQueryWithAuthCheck = async (
	args: any,
	api: any,
	extraOptions: any
) => {
	const result = await baseQuery(args, api, extraOptions)
	if (result.error && (result.error as FetchBaseQueryError).status === 401) {
		api.dispatch
		navigate('/authorization')
	}
	return result
}

const baseQueryWithRetry = retry(baseQueryWithAuthCheck, { maxRetries: 0 })

export const api = createApi({
	reducerPath: 'splitApi',
	baseQuery: baseQueryWithRetry,
	refetchOnMountOrArgChange: true,
	tagTypes: ['Users'],
	endpoints: () => ({}),
})
