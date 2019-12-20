import React from 'react';
// material-ui core components
import { Typography, Paper } from '@material-ui/core';
// Header style
import { styles } from './_info.style';

function Info() {
  const classes = styles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
        This is a sheet of paper.
      </Typography>
      <Typography component="p">
        Paper can be used to build surface or other elements for your application.
      </Typography>
    </Paper>
  );
}
export default Info;
