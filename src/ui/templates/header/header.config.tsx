import { IHeader } from '../../../interfaces/header.inteface';

export const config: IHeader = {
	routs: [ {
		id: 1,
		to: '/',
		name: 'Home'
	},{
		id: 2,
		to: '/user',
		name: 'User'
	},{
		id: 3,
		to: '/about',
		name: 'About'
	}]
};
