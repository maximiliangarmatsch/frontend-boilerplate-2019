import React from 'react';
// Core
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { IGrid } from '../../../interfaces/shared/grid.interface';

// Component Data
export const data: IGrid = {
	grid: [{
		id:1,
		size: 12,
		spacing: 3,
		element: (res: any) => <FormRow classes={res} />
	}, {
		id:2,
		size: 12,
		spacing: 3,
		element: (res: any) => <FormRow classes={res} />
	}, {
		id:3,
		size: 12,
		spacing: 3,
		element: (res: any) => <FormRow classes={res} />
	}
	]
};



export function FormRow({ classes }: any) {
	const formData: IGrid = {
		grid: [{
			id:1,
			size: 4,
			element: (res: any) => <Paper className={res.paper}>Text</Paper>
		}, {
			id:2,
			size: 4,
			element: (res: any) => <Paper className={res.paper}>Text</Paper>
		}, {
			id:3,
			size: 4,
			element: (res: any) => <Paper className={res.paper}>Text</Paper>
		}
		]
	};
	return (
		<React.Fragment>
			{formData.grid.map(res => {
				return <Grid item xs={res.size} key={res.id}>
					{res.element(classes)}
				</Grid>
			})}
		</React.Fragment>
	);
}
