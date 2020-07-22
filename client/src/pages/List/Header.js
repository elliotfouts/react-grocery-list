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
  }
})

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Select style={{color: 'currentColor', fontSize: '2rem'}} selected='Family' label='Lists'>
          <MenuItem value={'Family'}>Family</MenuItem>
          <MenuItem value={20}>Camping</MenuItem>
          <MenuItem value={30}>Birthday Party</MenuItem>
      </Select>

      <PlainButton style={{color: 'currentColor'}}>
        filter
      </PlainButton>
    </div>
  )
}

export default Header;