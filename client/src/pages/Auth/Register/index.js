import React, {useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import Container from '../Container'
import InputOutlined from '../../../components/Inputs/Outlined';
import OauthButton from '../../../components/Buttons/Oauth';
import FilledButton from '../../../components/Buttons/Filled';
import {PersonOutline, MailOutline, LockOutlined, ChevronRight, Visibility, VisibilityOff} from '@material-ui/icons';
import validateFields from '../../../utils/validateFields';

const useStyles = makeStyles({
  root: {
    '& p': {
      textAlign: 'center',
    }
  }
})

const Register = () => {
  const title = 'Create an account';
  const [user, setUser] = useState({name: '', email: '', password: ''});
  const [showPassword, setShowPassword] = useState(false);
  const message = {
    text: "Already have an account?", 
    linkText: 'Login', 
    href: "/login"
    }
  const classes = useStyles();
  
  const handleInputChange = ({target: {placeholder, value}}) => {
    setUser({...user, [placeholder]: value});
  }

  const handleSubmit = () => {
    const invalidField = validateFields(user);
    if (invalidField) console.log(`please fill out ${invalidField}`);
    else console.log('create new user');
  }

  return (
    <Container  title={title} message={message} submit={'Sign Up'} onSubmit={handleSubmit}>
      <div className={classes.root}>
          <OauthButton href={'http://www.google.com'}>Login with Google</OauthButton>
          <p>OR</p>
          <InputOutlined onChange={handleInputChange} style={{marginBottom: '1rem'}} placeholder={'name'} value={user.name} icon={<PersonOutline/>}/>
          <InputOutlined onChange={handleInputChange} style={{marginBottom: '1rem'}} placeholder={'email'} value={user.email} icon={<MailOutline/>}/>
          <InputOutlined onChange={handleInputChange} type={(showPassword) ? 'text': 'password' } style={{marginBottom: '1rem'}} placeholder={'password'} value={user.password} icon={<LockOutlined/>} />
      </div>
    </Container>
  )
}

export default Register;