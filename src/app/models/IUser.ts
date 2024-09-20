import { IBaseBodyResp } from './ICommon'

export interface IUser {
	user_id: number
	email: string
	username: string
	is_active: boolean
	is_deleted: boolean
	auth_source: string
	groups: string[]
	date_joined: string
}

export interface IGetUsersParams {
	limit: number
	offset?: number
	search?: string
}

interface IGetAllUsersBody {
	users: IUser[]
	count: number
}

export interface IGetAllUsers extends IBaseBodyResp {
	body: IGetAllUsersBody
}
