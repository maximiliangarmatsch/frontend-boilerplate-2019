import React from 'react';
// Interfaces
import { IRoute } from './interfaces/route.interface';
// Views
import VAbout from './views/about.component';
import VContact from './views/contact.component';

// Component Data
export const routes: IRoute = {
	routes: [{
		id: 1,
		path: '/about',
		component: (data?:any) => <VAbout />
	}, {
		id: 2,
		path: '/contact',
		component: (data?:any) => <VContact />
	}]
};
