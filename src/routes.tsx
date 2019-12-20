import React from 'react';
import { IRoute } from './interfaces/route.interface';
import VAbout from './ui/pages/about';
import VHome from './ui/pages/home';
import VUser from './ui/pages/user';

export const routes: IRoute = {
	routes: [{
		id: 1,
		exact: true,
		path: '/',
		component: (data?:any) => <VHome />
	},
	{
		id: 2,
		path: '/user',
		component: (data?:any) => <VUser />
	},
	{
		id: 3,
		path: '/about',
		component: (data?:any) => <VAbout />
	}]
};
