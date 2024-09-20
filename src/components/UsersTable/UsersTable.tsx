import classNames from 'classnames'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { IUser } from '../../app/models/IUser'
import SearchIcon from '../../assets/icons/search_icon.svg'
import tableStyles from '../../styles/common/table.module.scss'
import styles from './index.module.scss'

type Props = {
	users: IUser[] | undefined
}

const UsersTable = ({ users }: Props) => {
	console.log('users', users)
	const [searchTerm, setSearchTerm] = useState('')
	// const [filteredUsers, setFilteredProducts] = useState(userData)

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		// const term = e.target.value.toLowerCase()
		// setSearchTerm(term)
		// const filtered = userData.filter(
		// 	user =>
		// 		user.name.toLowerCase().includes(term) ||
		// 		user.name.toLowerCase().includes(term)
		// )
		// setFilteredProducts(filtered)
	}
	return (
		<motion.div
			className={classNames(tableStyles.table_motion)}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<div className={classNames(tableStyles.table_title_wrap)}>
				<h2 className={classNames(tableStyles.table_title)}>Список услуг</h2>
				<div className={classNames(tableStyles.table_search_wrap)}>
					<input
						onChange={handleSearch}
						value={searchTerm}
						className={classNames(tableStyles.search_input)}
						type='text'
						placeholder='найти...'
					/>
					<img
						className={classNames(tableStyles.search_img)}
						src={SearchIcon}
						alt='search icon'
					/>
				</div>
			</div>

			<div className={classNames(tableStyles.table_wrap)}>
				<table className={classNames(tableStyles.table)}>
					<thead>
						<tr>
							<th className={classNames(tableStyles.th)}>Name</th>
							<th className={classNames(tableStyles.th)}>Email</th>
							<th className={classNames(tableStyles.th)}>Role</th>
							<th className={classNames(tableStyles.th)}>Status</th>
							<th className={classNames(tableStyles.th)}>Actions</th>
						</tr>
					</thead>

					<tbody className={classNames(tableStyles.tbody)}>
						{users &&
							users.map((user: IUser) => (
								<motion.tr
									key={user.user_id}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.3 }}
								>
									<td className={tableStyles.td}>
										<div className={classNames(styles.td_wrap)}>
											<div className={classNames(styles.td_user_profile)}>
												<div className={classNames(styles.td_user_icon)}>
													{user.username.charAt(0)}
												</div>
											</div>
											<div className={classNames(styles.td_user_name)}>
												{user.username}
											</div>
										</div>
									</td>

									<td className={tableStyles.td}>
										<div className='text-sm text-gray-300'>{user.email}</div>
									</td>
									<td className={tableStyles.td}>
										<span className={classNames(tableStyles.td_span)}>
											role
										</span>
									</td>

									<td className={tableStyles.td}>
										<span
											className={classNames(styles.td_span, {
												[styles.active]: user.is_active,
											})}
										>
											{user.is_active ? 'active' : 'inactive'}
										</span>
									</td>

									<td className={classNames(styles.td_bottons)}>
										<button className={classNames(styles.edit_button)}>
											Edit
										</button>
										<button className={styles.delete_button}>Delete</button>
									</td>
								</motion.tr>
							))}
					</tbody>
				</table>
			</div>
		</motion.div>
	)
}

export default UsersTable
