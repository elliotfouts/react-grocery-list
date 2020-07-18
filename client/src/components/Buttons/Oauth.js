import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/styles';
import Link from '../Text/Link';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#4181ED',
    color: '#FFFFFF'
  }
})

const OauthButton = ({icon, children, href}) => {
  const classes = useStyles();

  return (
    <Link href={href}>
      <Button 
        className={classes.root}
        variant='contained'
        fullWidth={true}
        startIcon={<i style={{fontSize: '1rem'}} className="fab fa-google"></i>}
      >
        {children}
      </Button>
    </Link>
  )
}

export default OauthButton;