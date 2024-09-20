import { ISideBarLink } from '../../types/types.ts'

export const sidebar_links_data: ISideBarLink[] = [
	{
		id: 1,
		display: 'Приложение',
		link: '/',
		img: '/src/assets/icons/metrics_icon.svg',
	},
	{
		id: 2,
		display: 'Услуги',
		link: '/products',
		img: '/src/assets/icons/service_icon.svg',
	},
	{
		id: 3,
		display: 'Пользователи',
		link: '/users',
		img: '/src/assets/icons/users_icon.svg',
	},
	{
		id: 4,
		display: 'Пригласить',
		link: '/invite',
		img: '/src/assets/icons/invite_user_icon.svg',
	},
]
