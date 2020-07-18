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
    <Container  title={title} message={message} submit={'Sign Up'}>
      <div className={classes.root}>
          <OauthButton href={'http://www.google.com'}>Login with Google</OauthButton>
          <p>OR</p>
          <InputOutlined style={{marginBottom: '1rem'}} placeholder={'name'} value={''} icon={<PersonOutline/>}/>
          <InputOutlined style={{marginBottom: '1rem'}} placeholder={'email'} value={''} icon={<MailOutline/>}/>
          <InputOutlined style={{marginBottom: '1rem'}} placeholder={'password'} value={''} icon={<LockOutlined/>}/>
      </div>
    </Container>
  )
}

export default Register;