import React from 'react';
import Select from '@material-ui/core/Select';
import {makeStyles} from '@material-ui/styles';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles({
  root: {
    borderRadius: '0',
    '& div': {
      padding: '0rem',
      paddingBottom: '0rem',
    },
    '& div:focus': {
      backgroundColor: 'transparent',
    },
    '& .MuiSelect-icon': {
      color: 'currentColor',
    },
    '& fieldset': {
      display: 'none',
    }
  }
})

const Category = ({category, onChange, children, selected, label, style}) => {
  const classes = useStyles();

  return (
    <div>    
      <Select style={style} className={classes.root} variant='outlined' renderValue={() => (selected || label)} onChange={onChange} autoWidth={true} value={selected || label}>
        <MenuItem selected disabled>{label}</MenuItem>
        {children}
      </Select>
    </div>
  )
}

export default Category;