import React from 'react';
import Grid from '@material-ui/core/Grid';
import { styles } from './_sponsors.style';
import { sponsorsConfig } from './_sponsors.config';
import { Paper } from '@material-ui/core';

export default function Sponsors() {
    const classes = styles();
    const users = sponsorsConfig.Users();

    const gridColumn = () => {
        return (
            <React.Fragment>
                {sponsorsConfig.column.grid.map(res => {
                    return <Grid item xs={res.size} key={res.id}>
                        <Paper className={classes.paper}>Some Text</Paper>
                    </Grid>
                })}
            </React.Fragment>
        );
    }

    return (
        <div className={classes.root}>
            {console.log(users)}
            <Grid
                container
                spacing={1}
                className={classes.container}
            >
                {sponsorsConfig.row.grid.map(res => {
                    return <Grid
                        container
                        item
                        xs={res.size}
                        spacing={res.spacing}
                        key={res.id}
                    >
                        {gridColumn()}
                    </Grid>
                })}
            </Grid>
        </div>
    );
}