import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import { ISideBarLink } from '../../types/sideBarTypes'
import styles from './index.module.scss'

export type SideBarLinkProps = {
	link: ISideBarLink
	isOpenSideBar: boolean
}

const SideBarLink = ({ link, isOpenSideBar }: SideBarLinkProps) => {
	const spanClasses = classNames(styles.link_display, {
		[styles.active]: isOpenSideBar,
	})

	return (
		<li className={classNames(styles.link_wrap)}>
			<NavLink
				to={link.link}
				className={({ isActive }) =>
					classNames(styles.link, {
						[styles.active]: isActive,
					})
				}
			>
				<img src={link.img} alt={link.display} />
				<span className={spanClasses}>{link.display}</span>
			</NavLink>
		</li>
	)
}

export default SideBarLink
