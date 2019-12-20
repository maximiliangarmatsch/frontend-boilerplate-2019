import React from 'react';
// Router
import { Link, BrowserRouter as Router } from 'react-router-dom';
// material-ui core components
import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// Header config
import { config } from './config.module';
// Header style
import { styles } from './style.module';

function Header() {
    const classes = styles();

    return (
        <header>
            <div className={classes.root}>
                <AppBar position='static'>
                    <Toolbar>
                        <Typography variant='h6' className={classes.title}>
                            {config.routs!.map(res => {
                                return <Link
                                    className={classes.menuButton}
                                    to={res.to}
                                    key={res.id}>
                                    {res.name}
                                </Link>
                            })}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        </header>
    );
}
export default Header;
