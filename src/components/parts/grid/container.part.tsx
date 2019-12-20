import React from 'react';
// @material-ui/core components
import Grid from '@material-ui/core/Grid';
// Grid Config
import { styles } from './container.style'

export default function Container(props:any) {
  const classes = styles();
  const {...rest } = props;
  return (
	<Grid container {...rest} className={classes.grid}>
    </Grid>
  );
}

