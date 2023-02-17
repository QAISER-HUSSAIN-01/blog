import { Box, createTheme, Typography } from "@mui/material";
import Input from '../../src/components/input';
import StyledButton from '../../src/components/button';
import Link from "next/link";
// import {signupFields} from '../../src/utils/userFields';
import {createUser} from '../../src/services/user';
import { useState } from "react";
import { useSnackbar } from "notistack";

export default function Signup() {
    const [signupForm,setSignupForm] = useState({name:'',email:'',password:''});
    const {enqueueSnackbar} = useSnackbar()
    const signupFields = [
        {
            type: 'text',
            name:'name',
            placeholder: 'full name',
            label: 'Full Name',
            value:signupForm.name
        },
        {
            type: 'email',
            name:'email',
            placeholder: 'email',
            label: 'Email',
            value:signupForm.email

        },
        {
            type: 'password',
            name:'password',
            placeholder: 'password',
            label: 'Password',
            value:signupForm.password
        }
    ];
    const handleChange = (e)=>{setSignupForm({...signupForm,[e.target.name]:e.target.value})};
    const handleSubmit = async()=>{ 
        const res = await createUser(signupForm);
        if(!res.status){
            setSignupForm({name:'',email:'',password:''});
            return enqueueSnackbar(res.message,{variant:'error'})
        }
        enqueueSnackbar(res.message,{variant:'success'})
        console.log('response back', res);
    }
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box>
                <Typography variant="h5" sx={{ marginBottom: '20px' }}>SIGN UP</Typography>
                <Box component={'form'}>
                    {signupFields.map(({ type, placeholder, label, name,value }) => (
                        <Input
                            key={label}
                            type={type}
                            name={name}
                            placeholder={placeholder}
                            label={label}
                            handleChange={handleChange}
                            value={value}
                        />
                    ))}
                    <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                        <StyledButton
                            text={'signup'}
                            color={'success'}
                            handleClick={handleSubmit}
                        />
                        <Typography component='div'>
                            already have an account ?
                            <Link href={'/login'} style={{textDecoration:'none', color:'blue',borderBottom:'1px solid blue'}}> LOGIN </Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}