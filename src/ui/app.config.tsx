import { IRoute } from '../interfaces/route.interface';

const routes: IRoute = {
	list: [{
		id: 1,
		exact: true,
		path: '/',
		component: (data?:any) => null
	},
	{
		id: 2,
		path: '/user',
		component: (data?:any) => null
	},
	{
		id: 3,
		path: '/about',
		component: (data?:any) => null
	}]
};

export const appConfig={
	routes
}