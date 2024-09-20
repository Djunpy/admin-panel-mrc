import classNames from 'classnames'
import { useState } from 'react'
import { sidebar_links_data } from '../../assets/data/data'
import LeftArrowIcon from '../../assets/icons/left_arrow_icon.svg'
import Logo from '../../assets/icons/logo.png'
import { ISideBarLink } from '../../types/sideBarTypes'
import CommonList from '../Common/CommonList'
import styles from './index.module.scss'
import SideBarLink from './SideBarLink'

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const handleOpen: React.MouseEventHandler<HTMLDivElement> = () => {
		setIsOpen(!isOpen)
	}

	const asideClasses = classNames(styles.aside, {
		[styles.open]: isOpen,
	})

	const leftArrowClasses = classNames(styles.left_arrow, {
		[styles.rotate]: !isOpen,
	})

	const logoTitleClasses = classNames(styles.logo_title, {
		[styles.hide]: !isOpen,
	})

	const logoClasses = classNames(styles.logo, {
		[styles.rotate]: isOpen,
	})

	return (
		<aside className={asideClasses}>
			<div className={classNames(styles.wrap)}>
				<div className={classNames(styles.arrow_wrap)} onClick={handleOpen}>
					<img
						className={leftArrowClasses}
						src={LeftArrowIcon}
						alt='left arrow'
					/>
				</div>
				<div className={classNames(styles.logo_wrap)}>
					<img className={logoClasses} src={Logo} alt='logo' />
					<h1 className={logoTitleClasses}>CompanyName</h1>
				</div>

				<CommonList
					_className={classNames(styles.links)}
					items={sidebar_links_data}
					renderItem={(item: ISideBarLink) => (
						<SideBarLink link={item} isOpenSideBar={isOpen} />
					)}
					WrapperComponent='ul'
				/>
			</div>
		</aside>
	)
}

export default Sidebar
