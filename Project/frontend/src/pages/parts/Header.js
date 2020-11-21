import { AppBar, Button, Link, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React, { Component } from 'react'

import { clear } from '../../utils/storagehelper'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));
export default function Header() {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Typography>
                    <Link href="/" color="inherit">
                        Life Achievements
                    </Link>
                </Typography>
                <Button color="inherit">
                    Sign in
                </Button>
                <Button color="inherit">
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    );

    // render() {
    //     return (
    //         <header>
    //             <nav className="navbar" role="navigation" aria-label="main navigation">
    //                 <div className="navbar-brand">
    //                     <a className="navbar-item" href="/">
    //                         Life Achievements
    //                     </a>

    //                     <a role="button" className="navbar-burger burger" href="" aria-label="menu" aria-expanded="false" data-target="navbarContainer">
    //                         <span aria-hidden="true"></span>
    //                         <span aria-hidden="true"></span>
    //                         <span aria-hidden="true"></span>
    //                     </a>
    //                 </div>
    //                 <div id="navbarContainer" className="navbar-menu">
    //                     <div className="navbar-start">
    //                         <a className="navbar-item" href="/">
    //                             Home
    //                         </a>

    //                         <a className="navbar-item" href="/about">
    //                             About
    //                         </a>
    //                     </div>

    //                     <div className="navbar-end">
    //                         <div className="navbar-item">
    //                             <div className="buttons">
    //                                 <button className="button" href="#" disabled>Download</button>
    //                                 <a href="/register" className="button is-primary">
    //                                     <strong>Sign up</strong>
    //                                 </a>
    //                                 <a href="/login" onClick={clear()} className="button is-light">
    //                                     Log in
    //                                 </a>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </nav>
    //         </header>
    //     )
    // }
}