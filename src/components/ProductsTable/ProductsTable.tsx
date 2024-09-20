import classNames from 'classnames'
import { motion } from 'framer-motion'
import { useState } from 'react'
import SearchIcon from '../../assets/icons/search_icon.svg'
import tableStyles from '../../styles/common/table.module.scss'
import RewriteIcon from '../Icons/RewriteIcon'
import TrashIcon from '../Icons/TrashIcon'
import styles from './index.module.scss'

type Props = {}

const PRODUCT_DATA = [
	{
		id: 1,
		name: 'Wireless Earbuds',
		category: 'Electronics',
		price: 59.99,
		stock: 143,
		sales: 1200,
	},
	{
		id: 2,
		name: 'Leather Wallet',
		category: 'Accessories',
		price: 39.99,
		stock: 89,
		sales: 800,
	},
	{
		id: 3,
		name: 'Smart Watch',
		category: 'Electronics',
		price: 199.99,
		stock: 56,
		sales: 650,
	},
	{
		id: 4,
		name: 'Yoga Mat',
		category: 'Fitness',
		price: 29.99,
		stock: 210,
		sales: 950,
	},
	{
		id: 5,
		name: 'Coffee Maker',
		category: 'Home',
		price: 79.99,
		stock: 78,
		sales: 720,
	},
]

const ProductsTable = (props: Props) => {
	const [searchTerm, setSearchTerm] = useState('')
	const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA)

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const term = e.target.value.toLowerCase()
		setSearchTerm(term)
		const filtered = PRODUCT_DATA.filter(
			product =>
				product.name.toLowerCase().includes(term) ||
				product.category.toLowerCase().includes(term)
		)

		setFilteredProducts(filtered)
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
							<th className={classNames(tableStyles.th)}>Category</th>
							<th className={classNames(tableStyles.th)}>Price</th>
							<th className={classNames(tableStyles.th)}>Stock</th>
							<th className={classNames(tableStyles.th)}>Sales</th>
							<th className={classNames(tableStyles.th)}>Actions</th>
							<th className={classNames(tableStyles.th)}>Actions</th>
						</tr>
					</thead>
					<tbody className={classNames(tableStyles.tbody)}>
						{filteredProducts.map(item => (
							<motion.tr
								key={item.id}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
							>
								<td className={tableStyles.td}>{item.name}</td>
								<td className={tableStyles.td}>{item.category}</td>
								<td className={tableStyles.td}>{item.price}</td>
								<td className={tableStyles.td}>{item.stock}</td>
								<td className={tableStyles.td}>{item.sales}</td>
								<td className={tableStyles.td}>{item.sales}</td>
								<td className={classNames(styles.td_buttons)}>
									<button>
										<RewriteIcon fill='#3b82f6' width='30px' height='30px' />
									</button>
									<button>
										<TrashIcon fill='#f43f5e' width='30px' height='30px' />
									</button>
								</td>
							</motion.tr>
						))}
					</tbody>
				</table>
			</div>
		</motion.div>
	)
}

export default ProductsTable
