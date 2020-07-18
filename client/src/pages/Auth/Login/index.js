import React, {useState} from 'react';
import Container from '../Container';
import Link from '../../../components/Text/Link'
import {makeStyles} from '@material-ui/styles';
import {MailOutline, LockOutlined, ChevronRight} from '@material-ui/icons';
import InputOutlined from '../../../components/Inputs/Outlined';
import OauthButton from '../../../components/Buttons/Oauth';
import validateFields from '../../../utils/validateFields';


const useStyles = makeStyles({
  root: {
    '& p': {
      textAlign: 'center',
    },
  }
})

const LoginPage = () => {
  const classes = useStyles();
  const [user, setUser] = useState({email: '', password: ''});
  const title = 'Sign into your account';
  const message = {
    text: "Don't have an account?", 
    linkText: 'Create', 
    href: "/register"
    }

  const handleInputChange = ({target: {placeholder, value}}) => {
    setUser({...user, [placeholder]: value});
  }

  const handleSubmit = () => {
    const invalidField = validateFields(user);
    if (invalidField) console.log(`please fill out ${invalidField}`);
    else console.log('log user in');
  }

  return (
    <Container title={title} message={message} submit={'Login'} onSubmit={handleSubmit}>
      <div className={classes.root}>
        <OauthButton href={'http://www.google.com'}>Login with Google</OauthButton>
        <p>OR</p>
        <InputOutlined onChange={handleInputChange} style={{marginBottom: '1rem'}} placeholder={'email'} value={user.email || ''} icon={<MailOutline/>}/>
        <InputOutlined onChange={handleInputChange} type={'password'} style={{marginBottom: '0.5rem'}} placeholder={'password'} value={user.password || ''} icon={<LockOutlined/>}/>
        <Link style={{color: '#999999'}} href={'/resetpassword'}>forgot password?</Link>
      </div>
    </Container>
  )
}

export default LoginPage;