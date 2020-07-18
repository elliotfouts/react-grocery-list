import React from 'react';
import Container from '../Container';
import Link from '../../../components/Text/Link'
import {makeStyles} from '@material-ui/styles';
import {MailOutline, LockOutlined, ChevronRight} from '@material-ui/icons';
import InputOutlined from '../../../components/Inputs/Outlined';
import OauthButton from '../../../components/Buttons/Oauth';
import FilledButton from '../../../components/Buttons/Filled';


const useStyles = makeStyles({
  root: {
    '& p': {
      textAlign: 'center',
    },
  }
})

const LoginPage = () => {
  const classes = useStyles();
  const title = 'Sign into your account';
  const message = {
    text: "Don't have an account?", 
    linkText: 'Create', 
    href: "/register"
    }

  return (
    <Container title={title} message={message}>
      <div className={classes.root}>
        <OauthButton href={'http://www.google.com'}>Login with Google</OauthButton>
        <p>OR</p>
        <InputOutlined placeholder={'email'} value={''} icon={<MailOutline/>}/>
        <InputOutlined placeholder={'password'} value={''} icon={<LockOutlined/>}/>
        <Link style={{color: '#999999'}} href={'/resetpassword'}>forgot password?</Link>
        <br/>
        <FilledButton className={classes.submit} icon={<ChevronRight/>}>Login</FilledButton>
      </div>
    </Container>
  )
}

export default LoginPage;