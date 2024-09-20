import { motion } from 'framer-motion'
import { ISvgIcon } from '../../../types/svgIconTypes'

type StatCardProps = {
	SvgIcon: React.FC<ISvgIcon>
	svgWidth?: string
	svgHeight?: string
	svgFill?: string
	value?: string
	name: string
}

const StatCard: React.FC<StatCardProps> = ({
	SvgIcon,
	svgWidth,
	svgHeight,
	svgFill,
	value,
	name,
}) => {
	return (
		<motion.div
			className='bg-slate-700 bg-opacity-50 overflow-hidden backdrop-blur-md shadow-lg rounded-lg border border-solid border-slate-600'
			whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0,0,0,.5' }}
		>
			<div className='px-4 py-5 sm:p-6 '>
				<span className='flex items-center text-sm font-medium text-gray-400'>
					<SvgIcon fill={svgFill} width={svgWidth} height={svgHeight} />
					{name}
				</span>
				<p className='mt-1 text-3xl font-semibold text-gray-100'>{value}</p>
			</div>
		</motion.div>
	)
}
export default StatCard
