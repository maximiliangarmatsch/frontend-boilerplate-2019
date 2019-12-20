
export interface IRoute {
	routs: {
		id: number
		path: string,
		component: () => any
	}[]
}
