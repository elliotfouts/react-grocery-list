import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {List, Add, People, Person} from '@material-ui/icons';
import Palette from '../../utils/palette';


const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'absolute',
    zIndex: 20,
    bottom: '0',
    borderTop: `1px solid ${Palette.Grey}`,
  },
  iconRoot: {
    '&.selected': {
      color: Palette.Green,
    },
  }
});


const Navbar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('list');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} classes={{root: classes.root, selected: classes.selected}}>
      <BottomNavigationAction component={Link} to='/list' label='List' value='list' icon={<List/>} />
      <BottomNavigationAction component={Link} to='/add' label="Add" value='add' icon={<Add/>} />
      <BottomNavigationAction component={Link} to='/groups' label="Groups" value='groups' icon={<People/>} />
      <BottomNavigationAction component={Link} to='/profile' label="Profile" value='profile' icon={<Person/>} />
    </BottomNavigation>
    // <nav>
    //   <List/>
    //   <Add/>
    //   <People/>
    //   <Person/>
    // </nav>
  )
}

export default Navbar;