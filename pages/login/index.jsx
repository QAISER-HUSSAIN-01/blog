import { Box, Typography } from "@mui/material";
import Input from '../../src/components/input';
import StyledButton from '../../src/components/button';
import Link from "next/link";
import {loginFields} from '../../src/utils/userFields';
import { useState } from "react";

export default function Login() {
    const [loginForm,setLoginForm] = useState({name:'',email:'',password:''});
   
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box>
                <Typography variant="h5" sx={{ marginBottom: '20px' }}>LOG IN</Typography>
                <Box component={'form'} action='/api/hello'>
                    {loginFields.map(({ type, placeholder, label,name }) => (
                        <Input
                            key={label}
                            type={type}
                            name={name}
                            placeholder={placeholder}
                            label={label}
                        />
                    ))}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <StyledButton
                            text={'login'}
                            color={'success'}
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