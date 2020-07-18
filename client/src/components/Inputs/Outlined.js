import React from 'react';
import {Input, InputAdornment, IconButton} from '@material-ui/core';
import {Visibility, VisibilityOff} from '@material-ui/icons';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    padding: '0 10px',
    borderRadius: '5px',
    color: '#999999',
    border: '1px solid currentColor',
    '& input' : {
      marginLeft: '10px',
      color: '#000000',
    },
    '& input::placeholder': {
      color: '#444444',
    },
  }
})

const InputOutlined = ({style, name, icon, value, placeholder, onChange, type}) => {
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

export default InputOutlined;