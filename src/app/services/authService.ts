import { ILoginReq, IRegisterReq } from '../models/IAuth'
import { AuthResp } from '../models/ICommon'

import { api } from './api'

export const authApi = api.injectEndpoints({
	endpoints: builder => ({
		login: builder.mutation<AuthResp, ILoginReq>({
			query: data => ({
				url: '/auth/public/sign-in',
				method: 'POST',
				body: data,
			}),
		}),
		register: builder.mutation<AuthResp, IRegisterReq>({
			query: data => ({
				url: '/admin/public/sign-up',
				method: 'POST',
				body: data,
			}),
		}),
	}),
})

export const { useLoginMutation, useRegisterMutation } = authApi

export const {
	endpoints: { login, register },
} = authApi
