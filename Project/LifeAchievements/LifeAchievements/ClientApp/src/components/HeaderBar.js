import {
  AppBar,
  Button,
  Link,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";

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
  menuButtonContainer: {
    marginRight: 0,
  },
}));

export default function HeaderBar() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar>
        <Typography className={classes.title}>
          <Link color="inherit" href="/">
            Life Achievements
          </Link>
        </Typography>
        <div className={classes.menuButtonContainer}>
          <Button disabled color="inherit">
            Download
          </Button>
          <Button color="inherit" href="/register">Sign up</Button>
          <Button color="inherit" href="/login">Login</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
