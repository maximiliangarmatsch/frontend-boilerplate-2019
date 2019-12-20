import React from 'react';
// Interfaces
import { IRoute } from './interfaces/route.interface';
// Views
import VAbout from './ui/views/about.component';

// Component Data
export const routes: IRoute = {
	routes: [{
		id: 1,
		path: '/about',
		component: (data?:any) => <VAbout />
	}]
};
