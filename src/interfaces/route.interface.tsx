
export interface IRoute {
	routes: {
		id: number,
		exact?: boolean,
		path: string,
		component: () => any
	}[]
}
