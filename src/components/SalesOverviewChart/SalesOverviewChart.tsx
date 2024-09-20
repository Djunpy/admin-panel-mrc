import { motion } from 'framer-motion'
import {
	CartesianGrid,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts'

type Props = {}

const usersData = [
	{ month: 'Jul', growth: 50 },
	{ month: 'Auh', growth: 100 },
	{ month: 'Sep', growth: 150 },
	{ month: 'Oct', growth: 200 },
	{ month: 'Nov', growth: 300 },
	{ month: 'Dec', growth: 400 },
	{ month: 'Jan', growth: 500 },
	{ month: 'Feb', growth: 600 },
	{ month: 'Mar', growth: 700 },
	{ month: 'Apr', growth: 800 },
	{ month: 'May', growth: 900 },
	{ month: 'Jun', growth: 700 },
]

const SalesOverviewChart = (props: Props) => {
	return (
		<motion.div
			className='bg-slate-700 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border-solid border-2 border-slate-600'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<h2 className='text-lg font-medium text-gray-100 mb-4'>
				Динамика прироста пользователей
			</h2>
			<div className='h-80'>
				<ResponsiveContainer width={'100%'} height={'100%'}>
					<LineChart data={usersData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
						<XAxis dataKey={'month'} stroke='#9ca3af' />
						<YAxis stroke='#9ca3af' />
						<Tooltip
							contentStyle={{
								backgroundColor: 'rgba(31, 41, 55, 0.8)',
								borderColor: '#4B5563',
							}}
							itemStyle={{ color: '#E5E7EB' }}
						/>
						<Line
							type='monotone'
							dataKey='growth'
							stroke='#6366F1'
							strokeWidth={3}
							dot={{ fill: '#6366F1', strokeWidth: 2, r: 6 }}
							activeDot={{ r: 8, strokeWidth: 2 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	)
}

export default SalesOverviewChart
