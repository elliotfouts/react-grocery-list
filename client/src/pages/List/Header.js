import React from 'react';
import {Select} from '../../components/Select';
import {FilledButton} from '../../components/Buttons';
import {MenuItem} from '@material-ui/core';
import Palette from '../../utils/palette';
import {makeStyles} from '@material-ui/styles';
import {TopLeft, TopRight} from '../../components/Position';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles({
  root: {
    backgroundColor: Palette.Green,
    color: Palette.White,
    padding: '1rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '1rem 1rem 1rem rgba(0, 0, 0, 0.2)',
    '&>.filter-container': {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
    }
  }
})

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TopLeft><a style={{color: 'currentColor'}} href='/profile'><ChevronLeftIcon/></a></TopLeft>
      <TopRight><a style={{color: 'currentColor'}} href='/list/settings'><InfoIcon/></a></TopRight>
      <Select style={{color: 'currentColor', fontSize: '2rem', paddingBottom: '1rem'}} selected='Family' label='Lists'>
          <MenuItem value={'Family'}>Family</MenuItem>
          <MenuItem value={'Camping'}>Camping</MenuItem>
          <MenuItem value={'Birthday Party'}>Birthday Party</MenuItem>
      </Select>
      <div className='filter-container'>
        <p>4 items</p>
        <FilledButton style={{backgroundColor: Palette.White, color: Palette.Green}}>
          filter
        </FilledButton>
        <p>2 stores</p>
      </div>
    </div>
  )
}

export default Header;