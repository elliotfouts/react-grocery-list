import React, {useState} from 'react';
import Container from '../Container';
import Link from '../../../components/Text/Link'
import {makeStyles} from '@material-ui/styles';
import {Send, MailOutline, ChevronRight} from '@material-ui/icons';
import {InputOutlined} from '../../../components/Inputs';
import OauthButton from '../../../components/Buttons/Oauth';
import validateFields from '../../../utils/validateFields';


const useStyles = makeStyles({
  root: {
    '& p': {
      textAlign: 'center',
    },
  }
})

const ResetPassword = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const title = 'Reset your password'
  const message = {
    text: "Remembered it?", 
    linkText: 'Login', 
    href: "/register"
    }

  const handleInputChange = ({target: {value}}) => setEmail(value);

  const handleSubmit = () => {
    const invalidField = validateFields({email});
    if (invalidField) console.log(`please fill out ${invalidField}`);
    else console.log(`send reset link to @${email}`);
  }

  return (
    <Container title={title} message={message} submit={'Send'} onSubmit={handleSubmit} icon={<Send/>}>
      <div className={classes.root}>
        <InputOutlined style={{marginBottom: '1rem'}} onChange={handleInputChange} placeholder={'email'} value={email || ''} icon={<MailOutline/>}/>
        {/* <InputOutlined style={{marginBottom: '0.5rem'}} placeholder={'password'} value={''} icon={<LockOutlined/>}/> */}
        <Link style={{color: '#999999'}}>We will send you a link</Link>
      </div>
    </Container>
  )
}

export default ResetPassword;