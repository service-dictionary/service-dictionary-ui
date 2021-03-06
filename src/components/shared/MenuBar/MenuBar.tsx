import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const useStyles = makeStyles(theme => ({
  title: {
    color: '#fff',
    '&:hover': {
      color: '#fff'
    }
  },
  listItem: {
    color: theme.palette.text.primary,
    '&:hover': {
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
      textDecoration: 'none'
    }
  },
  hamburger: {
    color: '#fff'
  },
  menu: {
    width: 300,
  }
}));

interface PropTypes {
  open: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}

const MenuBar = ({ open, openMenu, closeMenu }: PropTypes) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.hamburger} onClick={openMenu}>
          <MenuIcon />
        </IconButton>
        <Link to="/" className={classes.title}>
          <Typography variant="h5" component="h1">RabbitHole</Typography>
        </Link>
      </Toolbar>
      <Drawer anchor="left" open={open} onClose={closeMenu}>
        <List component="nav" className={classes.menu}>
          <ListItem component={Link} to="/" className={classes.listItem} onClick={closeMenu}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem component={Link} to="/sources" className={classes.listItem} onClick={closeMenu}>
            <ListItemText primary="DataSources" />
          </ListItem>
          <ListItem component={Link} to="/datasets" className={classes.listItem} onClick={closeMenu}>
            <ListItemText primary="DataSets" />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default MenuBar;
