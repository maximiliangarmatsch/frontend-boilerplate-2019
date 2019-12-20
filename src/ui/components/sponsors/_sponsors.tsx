import React from 'react';
// Core
import Grid from '@material-ui/core/Grid';
// Style
import { styles } from './_sponsors.style';
//Config
import { sponsors_object } from './_sponsors.config';

export default function Sponsors() {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={1}
        className={classes.container}
      >
        {sponsors_object.grid.map(res => {
          return <Grid
            container
            item
            xs={res.size}
            spacing={res.spacing}
            key={res.id}
          >
            {res.child(classes)}
          </Grid>
        })}
      </Grid>
    </div>
  );
}