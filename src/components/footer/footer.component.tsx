import React from 'react';
// Footer config
import { config } from './config.component'
// Fotter style
import { styles } from './style.component'

export default function Footer() {
	const classes = styles();
	return (
		<footer className={classes.footer}>
			Created by {config.author}
			{config.git.icons('')}
			<a href={config.git.href} target={config.git.target}>{config.git.text}</a>
		</footer>
	);
}
