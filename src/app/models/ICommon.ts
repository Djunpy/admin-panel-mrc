export interface IBaseBodyResp {
	code: number
	error: string | null
}

export interface IBodySuccessResp extends IBaseBodyResp {
	body: null
	code: 0
	error: null
}

export interface IBodyErrorResp extends IBaseBodyResp {
	body: null
	code: number
	error: string
}

export interface IApiErrorResp {
	data: IBodyErrorResp
	status: number
}

export type AuthResp = IBodySuccessResp | IBodyErrorResp
