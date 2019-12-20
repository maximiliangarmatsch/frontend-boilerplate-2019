import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { config } from './header.config';
import { styles } from './header.style';
import { useAuth0 } from "../../../react-auth0-spa";

function Header() {
    const classes = styles();
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

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
                        <div>
                            {!isAuthenticated && (
                                <button onClick={() => loginWithRedirect({})}>Log in</button>
                            )}

                            {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        </header>
    );
}
export default Header;
