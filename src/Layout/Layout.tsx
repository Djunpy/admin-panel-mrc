import classNames from 'classnames'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import styles from './index.module.scss'

type Props = {}

const Layout = (props: Props) => {
	return (
		<main className={classNames(styles.layout)}>
			<div className={classNames(styles.wrap)}>
				<Sidebar />
				<Header />
				<Outlet />
			</div>
		</main>
	)
}

export default Layout
