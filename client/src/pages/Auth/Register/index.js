import React from 'react';
import {makeStyles} from '@material-ui/styles';
import Container from '../Container'
import InputOutlined from '../../../components/Inputs/Outlined';
import OauthButton from '../../../components/Buttons/Oauth';
import FilledButton from '../../../components/Buttons/Filled';
import {PersonOutline, MailOutline, LockOutlined, ChevronRight} from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    '& p': {
      textAlign: 'center',
    }
  }
})

const Register = () => {
  const title = 'Create an account';
  const message = {
    text: "Already have an account?", 
    linkText: 'Login', 
    href: "/login"
    }
  const classes = useStyles();

  return (
  <Container  title={title} message={message}>
    <div className={classes.root}>
        <OauthButton href={'http://www.google.com'}>Login with Google</OauthButton>
        <p>OR</p>
        <InputOutlined placeholder={'name'} value={''} icon={<PersonOutline/>}/>
        <InputOutlined placeholder={'email'} value={''} icon={<MailOutline/>}/>
        <InputOutlined placeholder={'password'} value={''} icon={<LockOutlined/>}/>
        <FilledButton className={classes.submit} icon={<ChevronRight/>}>Login</FilledButton>
    </div>
  </Container>
  )
}

export default Register;