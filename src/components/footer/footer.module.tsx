import React from 'react';
// Footer config
import { data } from './config.module'
// Fotter style
import { styles } from './style.module'

export default function Footer() {
	const classes = styles();
	return (
		<footer className={classes.footer}>
			Created by {data.author}
			{data.git.icons('')}
			<a href={data.git.href} target={data.git.target}>{data.git.text}</a>
		</footer>
	);
}
