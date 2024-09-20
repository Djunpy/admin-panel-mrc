import classNames from 'classnames'
import { motion } from 'framer-motion'
import CategoryDistributionChart from '../../components/CategoryDistributionChart/CategoryDistributionChart'
import StatCard from '../../components/Common/StatCard/StatCard'
import NewsPaperIcon from '../../components/Icons/NewsPaperIcon'
import SalesChannelChart from '../../components/SalesChannelChart/SalesChannelChart'
import SalesOverviewChart from '../../components/SalesOverviewChart/SalesOverviewChart'
import commonStyles from '../../styles/common.module.scss'

type Props = {}

const OverviewPage = (props: Props) => {
	return (
		<div className={classNames(commonStyles.page_container)}>
			<div className={classNames(commonStyles.second_container)}>
				<motion.div
					className={classNames(commonStyles.cards_wrap)}
					initial={{ opacity: 0, y: 20 }}
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
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<SalesOverviewChart />
					<CategoryDistributionChart />
					<SalesChannelChart />
				</div>
			</div>
		</div>
	)
}

export default OverviewPage
