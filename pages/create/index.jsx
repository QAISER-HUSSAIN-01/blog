import { Box, Typography } from "@mui/material";
import Input from '../../src/components/input';
import StyledButton from '../../src/components/button';
import { useState } from "react";
import {createBlog} from '../../src/services/blog';
import { useRouter } from "next/router";
export default function CreateBlog() {
    const [blogForm,setBlogForm] = useState({img:'',title:'',caption:'',description:''});
    const router = useRouter();
    const fields = [
        {
            type: 'text',
            name:'img',
            placeholder: 'Paste image URL here',
            label: 'Image URL',
            value:blogForm.img,
        },
        {
            type: 'text',
            name:'title',
            placeholder: 'Title',
            label: 'Title',
            value:blogForm.title,
        },
        {
            type: 'text',
            name:'caption',
            placeholder: 'Caption',
            label: 'caption',
            value:blogForm.caption,
        },
        {
            type: 'text',
            name:'description',
            placeholder: 'About Blog',
            label: 'About Blog',
            value:blogForm.description,
            multiline: true
        },
    ]
    const handleChange = (e) => { setBlogForm({...blogForm,[e.target.name]:e.target.value})}
    const handleSubmit = async() => { 
        const res = await createBlog(blogForm);
        console.log(res);
        if(!res.status){return 'not created'}
        else{
            setBlogForm({img:'',title:'',caption:'',description:''});
            router.push('/')
        }
    }
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
           
            <Typography variant="h5" component="div" gutterBottom>Create Blog</Typography>
           
            <Box component={'form'}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    minWidth: { lg: '800px', md: '800px', sm: '100%', xs: '100%' }
                }}>
                {fields.map(({ type, placeholder, label, multiline,name,value }) => (
                    <Input
                        key={label}
                        type={type}
                        name={name}
                        value={value}
                        placeholder={placeholder}
                        label={label}
                        multiline={multiline}
                        rows={10}
                        handleChange={handleChange} />
                ))}

                <StyledButton
                    text={'create'}
                    color={'primary'}
                    handleClick={handleSubmit}
                />
            
            </Box>
        </Box>
    )
}