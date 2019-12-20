import React from 'react';
// Interfaces
import { IRoute } from './interfaces/route.interface';
// Views
import VAbout from './views/about/about.view';
import VContact from './views/contact/contact.view';

// Component Data
export const data: IRoute = {
	routs: [{
		id: 1,
		path: '/about',
		component: (data?:any) => <VAbout />
	}, {
		id: 2,
		path: '/contact',
		component: (data?:any) => <VContact />
	}]
};
