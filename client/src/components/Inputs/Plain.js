import React from 'react';
import {Input, InputAdornment, IconButton} from '@material-ui/core';
import {Visibility, VisibilityOff} from '@material-ui/icons';
import {makeStyles} from '@material-ui/styles';
import Palette from '../../utils/palette'

const useStyles = makeStyles({
  root: {
    borderRadius: '5px',
    color: Palette.Grey,
    '& input' : {
      marginLeft: '10px',
      color: Palette.Black,
    },
    '& input::placeholder': {
      color: '#444444',
    },
  }
})

const InputPlain = ({style, name, icon, value, placeholder, onChange, type}) => {
  const classes = useStyles();

  return (
    <Input 
      value={value}
      name={name}
      type={type}
      onChange={onChange}
      style={style}
      placeholder={placeholder}
      className={classes.root}
      disableUnderline={true} 
      fullWidth={true}
      startAdornment={icon}
    />
  )
}

export default InputPlain;