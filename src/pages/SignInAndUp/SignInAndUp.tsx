import classNames from 'classnames'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { IApiErrorResp } from '../../app/models/ICommon'

import { ILoginReq, IRegisterReq } from '../../app/models/IAuth'
import {
	useLoginMutation,
	useRegisterMutation,
} from '../../app/services/authService'
import styles from './index.module.scss'

interface ISignUpInput {
	invite: string
	email: string
	first_name: string
	last_name: string
	password1: string
	password2: string
}

const SignInAndUp = () => {
	// states
	const [error, setError] = useState<string>('')

	// hooks

	const navigate = useNavigate()

	const [
		login,
		// { error: loginError, isError: loginIsError, data: loginData },
		// { isError: loginIsError, isSuccess: loginIsSuccess, error: loginError },
	] = useLoginMutation()

	const [
		register,
		// { error: loginError, isError: loginIsError, data: loginData },
		// { isError: loginIsError, isSuccess: loginIsSuccess, error: loginError },
	] = useRegisterMutation()
	const {
		register: registerLogin,
		handleSubmit: handleSubmitLogin,
		reset: resetLogin,
		formState: { errors: loginErrors, isValid: isLoginValid },
	} = useForm<ILoginReq>({ mode: 'onChange' })

	const {
		register: registerSignUp,
		handleSubmit: handleSubmitSignUp,
		reset: resetSignUp,
		formState: { errors: signUpErrors, isValid: isSignUpValid },
	} = useForm<IRegisterReq>({ mode: 'onChange' })
	const [isSignIn, setIsSignIn] = useState<boolean>(true)

	// form handlers
	const loginOnSubmit: SubmitHandler<ILoginReq> = async data => {
		setError('')
		try {
			await login(data).unwrap()
			navigate('/')
		} catch (error) {
			const apiError = error as IApiErrorResp
			const errCode = apiError.data.code
			if (errCode === -1) {
				setError('Пользователь не найден')
			} else if (errCode === 21) {
				setError('Не верный пароль')
			}
			console.log('auth error: ', apiError)
		}
	}
	const signUpOnSubmit: SubmitHandler<IRegisterReq> = async data => {
		try {
			await register(data).unwrap()
			setError('')
			setIsSignIn(!isSignIn)
			resetSignUp()
		} catch (error) {
			const apiError = error as IApiErrorResp
			const errCode = apiError.data.code
			if (errCode === 26) {
				setError('Приглашение уже использовано')
			} else if (errCode === -1) {
				setError('Приглашение не существует')
			}
			console.log('register error', error)
		}
	}

	// handlers

	const handleToggleBtn: React.MouseEventHandler<HTMLButtonElement> = () => {
		setIsSignIn(!isSignIn)
		resetLogin()
		resetSignUp()
	}

	// styles
	const wrapClasses = classNames(styles.wrap, {
		[styles.active]: !isSignIn,
	})

	const formButtonClasses = classNames(styles.button, {
		[styles.button_disabled]: !(isLoginValid || isSignUpValid),
	})

	return (
		<main className={classNames(styles.main)}>
			<div className={wrapClasses}>
				<div className={classNames(styles.form_wrap, styles.sign_up)}>
					<form
						className={classNames(styles.form)}
						onSubmit={handleSubmitSignUp(signUpOnSubmit)}
					>
						<h1 className={classNames(styles.title)}>Sign Up</h1>
						<input
							{...registerSignUp('invite', { required: true })}
							className={classNames(styles.input)}
							type='text'
							name='invite'
							placeholder='Приглашение'
						/>
						<input
							{...registerSignUp('email', { required: true })}
							className={classNames(styles.input)}
							type='email'
							name='email'
							placeholder='Email'
						/>
						<input
							{...registerSignUp('first_name', { required: false })}
							className={classNames(styles.input)}
							type='text'
							name='first_name'
							placeholder='Фамилия'
						/>
						<input
							{...registerSignUp('last_name', { required: false })}
							className={classNames(styles.input)}
							type='text'
							name='last_name'
							placeholder='Имя'
						/>

						<input
							{...registerSignUp('password1', { required: true })}
							className={classNames(styles.input)}
							type='password'
							name='password1'
							placeholder='Password'
						/>
						<input
							{...registerSignUp('password2', { required: true })}
							className={classNames(styles.input)}
							type='password'
							name='password2'
							placeholder='Password confirmation'
						/>

						{error ? <p className='text-red-600'>{error}</p> : <></>}
						<button
							type='submit'
							disabled={false}
							className={formButtonClasses}
						>
							Sign Up
						</button>
					</form>
				</div>
				<div className={classNames(styles.form_wrap, styles.sign_in)}>
					<form
						className={classNames(styles.form)}
						onSubmit={handleSubmitLogin(loginOnSubmit)}
					>
						<h1 className={classNames(styles.title)}> Sign In</h1>
						<input
							{...registerLogin('login', { required: true })}
							className={classNames(styles.input)}
							type='text'
							name='login'
							placeholder='Login'
						/>
						<input
							{...registerLogin('password', { required: true })}
							className={classNames(styles.input)}
							type='password'
							name='password'
							placeholder='Password'
						/>
						{error ? <p className='text-red-600'>{error}</p> : <></>}
						<Link to='/'>Забыли пароль?</Link>
						<button
							type='submit'
							disabled={!isLoginValid}
							className={formButtonClasses}
						>
							Sign In
						</button>
					</form>
				</div>
				<div className={classNames(styles.toggle_container)}>
					<div className={classNames(styles.toggle)}>
						<div
							className={classNames(styles.toggle_panel, styles.toggle_left)}
						>
							<button
								className={classNames(styles.button)}
								onClick={handleToggleBtn}
							>
								Sign In
							</button>
						</div>
						<div
							className={classNames(styles.toggle_panel, styles.toggle_right)}
						>
							<button
								className={classNames(styles.button)}
								onClick={handleToggleBtn}
							>
								Sign Up
							</button>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default SignInAndUp
