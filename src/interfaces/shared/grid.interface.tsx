export interface IGrid {
	grid: {
		id:number,
		size: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto'| undefined,
		spacing?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | undefined,
		child?: any
	}[]
}