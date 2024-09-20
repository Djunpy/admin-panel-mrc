export interface ILoginReq {
	login: string
	password: string
}

export interface IRegisterReq {
	email: string
	photo?: string
	password1: string
	password2: string
	first_name?: string
	last_name?: string
	invite: string
}
