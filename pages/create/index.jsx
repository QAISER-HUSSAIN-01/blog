import { Box, Typography } from "@mui/material";
import Input from '../../src/components/input';
import StyledButton from '../../src/components/button';

export default function CreateBlog() {
    const fields = [
        {
            type: 'text',
            placeholder: 'Title',
            label: 'Title',
        },
        {
            type: 'text',
            placeholder: 'Caption',
            label: 'caption',
        },
        {
            type: 'text',
            placeholder: 'About Blog',
            label: 'About Blog',
            multiline: true
        },
    ]
    const handleChange = () => { }
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
                {fields.map(({ type, placeholder, label, multiline }) => (
                    <Input
                        key={label}
                        type={type}
                        placeholder={placeholder}
                        label={label}
                        multiline={multiline}
                        rows={10}
                        handleChange={handleChange} />
                ))}

                <StyledButton
                    text={'create'}
                    color={'primary'}
                    handleClick={''}
                />
            
            </Box>
        </Box>
    )
}