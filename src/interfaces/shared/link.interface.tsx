export interface ILink {
	id?: number,
	text: string,
	href: string,
	target: string,
	icons: (data: any) => any
}