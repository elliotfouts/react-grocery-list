import React from 'react';
import {Select} from '../../components/Select';
import {PlainButton} from '../../components/Buttons';
import {MenuItem} from '@material-ui/core';
import Palette from '../../utils/palette';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: Palette.Green,
    color: Palette.White,
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    boxShadow: '1rem 1rem 1rem rgba(0, 0, 0, 0.2)',
  }
})

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Select style={{color: 'currentColor', fontSize: '2rem'}} selected='Family' label='Lists'>
          <MenuItem value={'Family'}>Family</MenuItem>
          <MenuItem value={'Camping'}>Camping</MenuItem>
          <MenuItem value={'Birthday Party'}>Birthday Party</MenuItem>
      </Select>

      <PlainButton style={{color: 'currentColor'}}>
        filter
      </PlainButton>
    </div>
  )
}

export default Header;