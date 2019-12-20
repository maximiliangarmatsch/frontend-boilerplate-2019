import React from 'react';
// Router
import { Link } from 'react-router-dom';
// material-ui core components
import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// Header config
import { data } from './header.config';
// Header style
import { styles } from './header.style';

function Header() {
  const classes = styles();

  return (
    <header>
      <div className={classes.root}>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' className={classes.title}>
              {data.routs!.map(res => {
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
