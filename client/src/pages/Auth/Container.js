import React from 'react';
import {makeStyles} from '@material-ui/styles';
import FilledButton from '../../components/Buttons/Filled';
import {ChevronRight} from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    backgroundColor: '#007370',
    '& header': {
      padding: '1rem 2rem',
      color: '#FFFFFF',
      '& h1': {
        fontSize: '1rem',
      }
    },
    '& h1': {
      margin: '0rem',
    }
  },
  content: {
    backgroundColor: '#EEEEEE',
    borderRadius: '1rem 1rem 0 0',
    boxShadow: '-1rem 0rem 2rem rgba(0, 0, 0, 0.3)',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '95%',
    '& div': {
      '& h1': {
      fontWeight: '200',
      marginBottom: '2rem',
      '& a': {
        color: 'red',
      }
      }
    }
  },
  submit: {
    marginTop: '2rem',
    display: 'flex',
    justifyContent: 'center',
  }

})

const Container = ({children, title, submit, message, icon,}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <header>
        <h1>GROCER-EASE</h1>
      </header>

      <main className={classes.content}>
        <div>
          <h1>{title}</h1>
          {children}
          <div className={classes.submit}>
            <FilledButton className={classes.submit} icon={icon || <ChevronRight/>}>{submit}</FilledButton>
          </div>
        </div>
        <p>{message.text} <a href={message.href}>{message.linkText}</a> </p>
      </main>
    </div>
  )
}

export default Container;