import { ILink } from './shared/link.interface';

export interface IFooter {
	links: ILink[],
	author: string,
	git: ILink,
	text?: string
}