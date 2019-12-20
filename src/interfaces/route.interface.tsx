
export interface IRoute {
	routes: {
		id: number
		path: string,
		component: () => any
	}[]
}
