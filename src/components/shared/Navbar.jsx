import { AppBar, Toolbar, Typography, IconButton, Avatar, Box, TextField, MenuItem, Button } from '@mui/material'
import Link from 'next/link';
import { useState } from 'react';
import ProfileMenu from '../menu';
import { useCookies, } from 'react-cookie'
import { useRouter } from 'next/router';
import {verify} from 'jsonwebtoken';
export default function Navbar() {
    const [cookies, setCookie, removeCookie] = useCookies();
    const [anchorEl, setAnchorEl] = useState(null);
    const router = useRouter();

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleProfile = ()=>{
        setAnchorEl(null);
        router.push('/profile')
    }
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleCreate = () => {
        setAnchorEl(null);
        router.push('/create')
    }
    const handleLogout = () => {
        setAnchorEl(null);
        removeCookie('token');
    }

    return (
        <AppBar position='fixed'>
            <Toolbar sx={{ justifyContent: 'space-between' }}>

                <Typography variant='h6' component='div' onClick={()=>{router.push('/')}}>BLOG APP</Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 5 }}>

                    {/* <TextField
                        select
                        defaultValue={'categories'}
                        variant='standard'
                        sx={{ border: 'none', color: 'white', background: 'white', width: '200px' }}
                    >
                        <MenuItem value='foods' >Foods</MenuItem>
                        <MenuItem value='sports' >Sports</MenuItem>
                        <MenuItem value='programming' >Programming</MenuItem>
                    </TextField> */}
                    
                    {/* {cookies.token ?
                        <Link href='/create'>create</Link>
                        :
                        <IconButton onClick={handleClick}>
                            <Avatar />
                        </IconButton>
                    } */}
                    <IconButton onClick={handleClick}>
                        <Avatar />
                    </IconButton>
                </Box>

                <ProfileMenu
                    anchorEl={anchorEl}
                    open={open}
                    handleClose={handleClose}
                    handleLogout={handleLogout}
                    handleCreate={handleCreate}
                    handleProfile={handleProfile}
                    token={cookies ? cookies.token : ''}
                />
            </Toolbar>
        </AppBar >
    )
}
