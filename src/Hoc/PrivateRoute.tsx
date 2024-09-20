type Props = {
	component: React.ReactNode
	requireRole: string
}

const PrivateRoute: React.FC<Props> = ({
	component,
	requireRole,
	...rest
}: Props) => {
	return <div>PrivateRoute</div>
}

export default PrivateRoute
