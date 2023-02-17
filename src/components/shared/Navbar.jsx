import { AppBar, Toolbar, Typography, IconButton, Avatar, Box, TextField, MenuItem } from '@mui/material'
import { useState } from 'react';
import ProfileMenu from '../menu';
export default function Navbar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position='fixed'>
            <Toolbar sx={{ justifyContent: 'space-between' }}>

                <Typography variant='h6' component='div'>BLOG APP</Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 5 }}>

                    <TextField
                        select
                        defaultValue={'categories'}
                        variant='standard'
                        sx={{ border: 'none', color: 'white', background: 'white', width: '200px' }}
                    >

                        <MenuItem value='foods' >Foods</MenuItem>
                        <MenuItem value='sports' >Sports</MenuItem>
                        <MenuItem value='programming' >Programming</MenuItem>

                    </TextField>

                    <IconButton onClick={handleClick}>
                        <Avatar />
                    </IconButton>

                </Box>
                <ProfileMenu
                    anchorEl={anchorEl}
                    open={open}
                    handleClose={handleClose}
                />
            </Toolbar>
        </AppBar>
    )
}
