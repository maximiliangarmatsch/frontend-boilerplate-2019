
export interface IRoute {
	list: {
		id: number,
		exact?: boolean,
		path: string,
		component: () => any
	}[]
}
