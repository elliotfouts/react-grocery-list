import React from 'react';
import Container from '../Container';
import Link from '../../../components/Text/Link'
import {makeStyles} from '@material-ui/styles';
import {Send, LockOutlined, ChevronRight} from '@material-ui/icons';
import InputOutlined from '../../../components/Inputs/Outlined';
import OauthButton from '../../../components/Buttons/Oauth';


const useStyles = makeStyles({
  root: {
    '& p': {
      textAlign: 'center',
    },
  }
})

const ResetPassword = () => {
  const classes = useStyles();
  // const title = 'Sign into your account';
  const title = 'Reset your password'
  const message = {
    text: "Remembered it?", 
    linkText: 'Login', 
    href: "/register"
    }

  return (
    <Container title={title} message={message} submit={'Send'} icon={<Send/>}>
      <div className={classes.root}>
        {/* <InputOutlined style={{marginBottom: '1rem'}} placeholder={'email'} value={''} icon={<MailOutline/>}/> */}
        <InputOutlined style={{marginBottom: '0.5rem'}} placeholder={'password'} value={''} icon={<LockOutlined/>}/>
        <Link style={{color: '#999999'}}>We will send you a link</Link>
      </div>
    </Container>
  )
}

export default ResetPassword;