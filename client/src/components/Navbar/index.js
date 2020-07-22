import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {List, Add, Person} from '@material-ui/icons';
import Palette from '../../utils/palette';


const useStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: '0',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    '& a': {
      flexGrow: '1',
      padding: '1.5rem 0rem',
      display: 'grid',
      placeItems: 'center',
      borderTop: `1px solid ${Palette.Grey}`,
      color: Palette.Grey,
    },
    '& a.active': {
      borderTop: `3px solid ${Palette.Green}`,
      color: Palette.Green,
    }
  }
});


const Navbar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('list');
  const [active, setActive] = useState('');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    // parse url to get current page
    const page = window.location.href.match(/:\/\/(.[^\/]+)(.*)/)[2].substr(1);
    setActive(page);
  }, []);

  return (
    <nav className={classes.root}>
      <a className={(active == 'list' && 'active')} href='/list'>
        <List/>
      </a>
      <a className={(active == 'add' && 'active')} href='/add'>
        <Add/>
      </a>
      <a className={(active == 'profile' && 'active')} href='/profile'>
        <Person/>
      </a>
    </nav>
  )
}

export default Navbar;