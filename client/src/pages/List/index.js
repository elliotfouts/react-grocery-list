import React from 'react';
import Navbar from '../../components/Navbar';
import {StandardCard} from '../../components/Cards';
import {InputPlain, InputUnderlined} from '../../components/Inputs';
import ProfilePicture from '../../components/ProfilePicture';
import Palette from '../../utils/palette';
import {makeStyles} from '@material-ui/styles';
import {ChevronRight, Add} from '@material-ui/icons';
import CircularProgress from '@material-ui/core/CircularProgress';
import Header from './Header';
import GroceryList from './GroceryList';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
  root: {
    background: Palette.White,
  },
  fab: {
    position: 'absolute',
    height: '75px',
    width: '75px',
    bottom: '20px',
    right: '20px',
    backgroundColor: Palette.Green,
    color: Palette.White,
  }
})

const List = () => {
  const classes=useStyles();
  return (
    <div className={classes.root}>
        <Header/>
        <GroceryList/>
        <a href='/add'>
          <Fab className={classes.fab}>
            <AddIcon />
          </Fab>
        </a>
    </div>
  )
}

export default List;