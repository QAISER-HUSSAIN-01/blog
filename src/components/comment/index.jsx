import { Box } from "@mui/material";
import StyledButton from "../button";
import Input from '../input';

export default function Comment() {
    const handleChange = ()=>{}
    const handleSubmit = ()=>{}
    return (
        <Box sx={{ maxWidth:'700px',mt:'20px'}}>
            <Input
                type={'text'}
                placeholder={'enter your comment'}
                label={'Comment'}
                multiline={true}
                rows={3}
                handleChange={handleChange}
            />
            <Box sx={{ mt:'10px',display:'flex',justifyContent:'flex-end' }}>
            <StyledButton
                text={'post'}
                color={'warning'}
                handleClick={handleSubmit}
            />
            </Box>
        </Box>
    )
}