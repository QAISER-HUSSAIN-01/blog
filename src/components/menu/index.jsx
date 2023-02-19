import { Avatar, Box, Button, Divider, ListItemIcon, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import {  MdLogout, MdCreate } from 'react-icons/md';


export default function ProfileMenu({ open, anchorEl, handleClose, handleLogout, token, handleCreate,handleProfile }) {
    return (
        <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
                elevation: 0,
                sx: {
                    width: 200,
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                    },
                    '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                    },
                },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            {token ?
                <Box>
                    <MenuItem onClick={handleProfile}>
                        <Avatar /> Profile
                    </MenuItem>

                    <MenuItem onClick={handleCreate}>
                    <ListItemIcon>
                            <MdCreate fontSize="large"/>
                        </ListItemIcon>
                         Create
                    </MenuItem>

                    <Divider />

                    <MenuItem onClick={handleLogout}>
                        <ListItemIcon>
                            <MdLogout fontSize="large" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Box>
                :
                <Link href={'/login'} style={{textDecoration:'none',paddingX:'10px'}}><Button variant="contained" color='warning' fullWidth>login</Button></Link>
            }
        </Menu>
    )
}