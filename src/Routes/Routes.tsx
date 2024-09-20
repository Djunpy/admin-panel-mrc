import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Layout/Layout'
import OverviewPage from '../pages/OverviewPage/OverviewPage'
import ProductsPage from '../pages/ProductsPage/ProductsPage'
import SignInAndUp from '../pages/SignInAndUp/SignInAndUp'
import UsersPage from '../pages/UsersPage/UsersPage'

export const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				element: <OverviewPage />,
				path: '/',
			},
			{
				element: <UsersPage />,
				path: 'users',
			},
			{
				element: <ProductsPage />,
				path: 'products',
			},
		],
	},
	{
		element: <SignInAndUp />,
		path: '/authorization',
	},
])
