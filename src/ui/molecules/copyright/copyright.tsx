import React from 'react';
import { Box, Typography, Link } from '@material-ui/core';

function Copyright() {
	return (
		<Box mt={5}>
			<Typography variant="body2" color="textSecondary" align="center">
				{'Copyright © '}
				<Link color="inherit" href="https://material-ui.com/">
					Your Website
		</Link>{' '}
				{new Date().getFullYear()}
				{'.'}
			</Typography>
		</Box>
	);
}
export default Copyright;