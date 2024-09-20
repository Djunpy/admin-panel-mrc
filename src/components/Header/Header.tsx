import classNames from 'classnames'
import styles from './index.module.scss'

type Props = {}

const Header = (props: Props) => {
	return (
		<header className={classNames(styles.header)}>
			<div className='wrap'></div>
		</header>
	)
}

export default Header
