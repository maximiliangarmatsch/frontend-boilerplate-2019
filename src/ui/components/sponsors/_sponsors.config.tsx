import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { IGrid } from '../../../interfaces/shared/grid.interface';

export const sponsors_object: IGrid = {
	grid: [{
		id:1,
		size: 12,
		spacing: 3,
		child: (res: any) => <FormRow classes={res} />
	}, {
		id:2,
		size: 12,
		spacing: 3,
		child: (res: any) => <FormRow classes={res} />
	}, {
		id:3,
		size: 12,
		spacing: 3,
		child: (res: any) => <FormRow classes={res} />
	}
	]
};

function FormRow({ classes }: any) {

	// const {userData, loading, error} = useQuery(gqlUsers);

	const formData: IGrid = {
		grid: [{
			id:1,
			size: 4,
			child: (res: any) => <Paper className={res.paper}>Text</Paper>
		}, {
			id:2,
			size: 4,
			child: (res: any) => <Paper className={res.paper}>Text</Paper>
		}, {
			id:3,
			size: 4,
			child: (res: any) => <Paper className={res.paper}>Text</Paper>
		}
		]
	};
	return (
		<React.Fragment>
			{formData.grid.map(res => {
				return <Grid item xs={res.size} key={res.id}>
					{res.child(classes)}
				</Grid>
			})}
		</React.Fragment>
	);
}
