import React from 'react';
// Footer config
import { config } from './footer.config'
// Fotter style
import { styles } from './footer.style'

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
