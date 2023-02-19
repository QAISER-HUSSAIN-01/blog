import { Box, Typography } from "@mui/material";
import Input from '../../src/components/input';
import StyledButton from '../../src/components/button';
import Link from "next/link";
// import {loginFields} from '../../src/utils/userFields';
import { useEffect, useState } from "react";
import { loginUser } from "../../src/services/user";
import {useCookies} from 'react-cookie';
import {useRouter} from 'next/router';
import { useSnackbar } from "notistack";

export default function Login() {
    const [loginForm,setLoginForm] = useState({email:'',password:''});
    const [cookies,setCookies]= useCookies();
    const {enqueueSnackbar} = useSnackbar()
    const router = useRouter();
    const loginFields = [
        {
            type: 'email',
            name:'email',
            placeholder: 'email',
            label: 'Email',
            value:loginForm.email
        },
        {
            type: 'password',
            name:'password',
            placeholder: 'password',
            label: 'Password',
            value:loginForm.password

        }
    ]
    const handleChange = async(e)=>{
        setLoginForm({...loginForm, [e.target.name]:e.target.value})
    }
    const handleSubmit = async()=>{
        const res = await loginUser(loginForm);
        console.log(res);
        if(!res.status){
          return enqueueSnackbar(res.message,{variant:'error'})
        }else{
            enqueueSnackbar(res.message,{variant:'success'})
            setCookies("token",res.data.token,{maxAge:60*60*24*30});
            // localStorage.setItem('name',res.data.user.name)
            // localStorage.setItem('email',res.data.user.email)
            // localStorage.setItem('id',res.data.user._id)
            setLoginForm({email:'',password:''});
        }
    }


    
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box>
                <Typography variant="h5" sx={{ marginBottom: '20px' }}>LOG IN</Typography>
                <Box component={'form'} action='/api/hello'>
                    {loginFields.map(({ type, placeholder, label, name,value }) => (
                        <Input
                            key={label}
                            type={type}
                            name={name}
                            value={value}
                            placeholder={placeholder}
                            label={label}
                            handleChange={handleChange}
                        />
                    ))}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <StyledButton
                            text={'login'}
                            color={'success'}
                            handleClick={handleSubmit}
                        />
                        <Typography component='div'>
                            don not have an account ?
                            <Link href={'/signup'} style={{ textDecoration: 'none', color: 'blue', borderBottom: '1px solid blue' }}> SIGNUP </Link>
                        </Typography>
                    </Box>

                </Box>
            </Box>
        </Box>
    )
}