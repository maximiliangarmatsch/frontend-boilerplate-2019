import React from 'react';
// Core
import Grid from '@material-ui/core/Grid';
// Style
import {styles} from './sponsors.style';
//Config
import {data} from './sponsors.config';

export default function Sponsors() {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1} className={classes.container}>
      {data.grid.map(res => {
				return <Grid container item xs={res.size} spacing={res.spacing} key={res.id}>
					{res.element(classes)}
				</Grid>
			})}
      </Grid>
    </div>
  );
}