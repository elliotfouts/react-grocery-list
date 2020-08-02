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

const useStyles = makeStyles({
  root: {
    background: Palette.White,
  }
})

const List = () => {
  const classes=useStyles();
  return (
    <div className={classes.root}>
        <Header/>
        <GroceryList/>
    </div>
  )
}

export default List;