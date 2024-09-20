import { motion } from 'framer-motion'

import classNames from 'classnames'
import CategoryDistributionChart from '../../components/CategoryDistributionChart/CategoryDistributionChart'
import StatCard from '../../components/Common/StatCard/StatCard'
import NewsPaperIcon from '../../components/Icons/NewsPaperIcon'
import ProductsTable from '../../components/ProductsTable/ProductsTable'
import SalesOverviewChart from '../../components/SalesOverviewChart/SalesOverviewChart'
import commonStyles from '../../styles/common.module.scss'

type Props = {}

const ProductsPage = (props: Props) => {
	return (
		<div className={classNames(commonStyles.page_container)}>
			<div className={classNames(commonStyles.second_container)}>
				<motion.div
					className={classNames(commonStyles.cards_wrap)}
					initial={{ opacity: 0, y: 200 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard
						SvgIcon={NewsPaperIcon}
						svgFill='white'
						svgWidth='30px'
						svgHeight='30px'
						value='12.543'
						name='Title metrics'
					/>
					<StatCard
						SvgIcon={NewsPaperIcon}
						svgFill='blue'
						svgWidth='30px'
						svgHeight='30px'
						value='12.543'
						name='Title metricsdfdfgdfg'
					/>
					<StatCard
						SvgIcon={NewsPaperIcon}
						svgFill='blue'
						svgWidth='30px'
						svgHeight='30px'
						value='12.543'
						name='Title metricsdfgdfg '
					/>
					<StatCard
						SvgIcon={NewsPaperIcon}
						svgFill='green'
						svgWidth='30px'
						svgHeight='30px'
						value='12.543'
						name='Title metricsdfgdfgdfg'
					/>
					<StatCard
						SvgIcon={NewsPaperIcon}
						svgFill='blue'
						svgWidth='30px'
						svgHeight='30px'
						value='12.543'
						name='Title metricsdfgdfg'
					/>
					<StatCard
						SvgIcon={NewsPaperIcon}
						svgFill='red'
						svgWidth='30px'
						svgHeight='30px'
						value='12.543'
						name='Title metricsdfgdfg'
					/>
				</motion.div>
				<ProductsTable />

				<div className={classNames(commonStyles.metrics_wrap)}>
					<SalesOverviewChart />
					<CategoryDistributionChart />
				</div>
			</div>
		</div>
	)
}

export default ProductsPage
