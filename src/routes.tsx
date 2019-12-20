import React from 'react';
import { IRoute } from './interfaces/route.interface';
import VAbout from './ui/pages/about.component';

export const routes: IRoute = {
	routes: [{
		id: 1,
		path: '/about',
		component: (data?:any) => <VAbout />
	}]
};
