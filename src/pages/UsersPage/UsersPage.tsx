import classNames from 'classnames'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { IGetUsersParams } from '../../app/models/IUser'
import { useGetAllUsersQuery } from '../../app/services/users'
import StatCard from '../../components/Common/StatCard/StatCard'
import NewsPaperIcon from '../../components/Icons/NewsPaperIcon'
import SalesOverviewChart from '../../components/SalesOverviewChart/SalesOverviewChart'
import UsersTable from '../../components/UsersTable/UsersTable'
import commonStyles from '../../styles/common.module.scss'

type Props = {}

const UsersPage = (props: Props) => {
	const [queryParams, setQueryParams] = useState<IGetUsersParams>({
		limit: 5,
		offset: 0,
		search: '',
	})
	const { data: allUsersData, isSuccess: allUsersIsSuccess } =
		useGetAllUsersQuery(queryParams)

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
				<UsersTable users={allUsersData?.body.users} />
				<div className={classNames(commonStyles.metrics_wrap)}>
					<SalesOverviewChart />
				</div>
			</div>
		</div>
	)
}

export default UsersPage
