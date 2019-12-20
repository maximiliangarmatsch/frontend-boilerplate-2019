// Interfaces
import { IHeader } from '../../interfaces/header.inteface';

// Component Data
export const config: IHeader = {
	routs: [{
		id: 1,
		to: '/app',
		name: 'Home'
	}, {
		id: 2,
		to: '/about',
		name: 'About'
	}, {		
		id: 3,
		to: '/contact',
		name: 'Contact'
	}]
};
