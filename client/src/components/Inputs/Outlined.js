import React from 'react';
import Input from '@material-ui/core/Input';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    padding: '0 10px',
    borderRadius: '5px',
    color: '#999999',
    border: '1px solid currentColor',
    '& input' : {
      marginLeft: '10px',
    },
    '& input::placeholder': {
      color: '#444444',
    }
  }
})

const InputOutlined = ({style, icon, value, placeholder, onChange}) => {
  const classes = useStyles();

  return (
    <Input 
      value={value}
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