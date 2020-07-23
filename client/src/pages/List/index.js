import React from 'react';
import Navbar from '../../components/Navbar';
import {StandardCard} from '../../components/Cards';
import {InputPlain, InputUnderlined} from '../../components/Inputs';
import ProfilePicture from '../../components/ProfilePicture';
import Palette from '../../utils/palette';
import {makeStyles} from '@material-ui/styles';
import {ChevronRight, Add} from '@material-ui/icons';
import Header from './Header';

const useStyles = makeStyles({
})

const List = () => {
  const classes=useStyles();
  return (
    <div>
        <Header/>
        <Navbar/>
    </div>
  )
}

export default List;