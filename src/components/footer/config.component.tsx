import React from 'react';
// Material Icons
import Favorite from '@material-ui/icons/Favorite';
import Done from '@material-ui/icons/Done';
// Interfaces
import { IFooter } from '../../interfaces/footer.interface';


// Component Data
export const config: IFooter = {
	author: 'Maximilian Garmatsch',
	git: {
		text: 'Project Boilerplate',
		href: '/gitlab.com',
		target: '_blank',
		icons: (data) => <Favorite className={data} />
	},
	links: [{
		id: 1,
		text: 'google',
		href: 'google.com',
		target: '_blank',
		icons: (data) => <Done className={data} />
	}
	]
};

