import { IGetAllUsers, IGetUsersParams } from '../models/IUser'
import { api } from './api'

export const usersApi = api.injectEndpoints({
	endpoints: builder => ({
		GetAllUsers: builder.query<IGetAllUsers, IGetUsersParams>({
			query: ({ limit, offset, search }: IGetUsersParams) => ({
				url: '/admin/private/users/',
				params: {
					limit: limit,
					offset: offset,
					search: search,
				},
			}),
			providesTags: result => ['Users'],
		}),
	}),
})

export const { useGetAllUsersQuery } = usersApi

export const {
	endpoints: {},
} = usersApi
