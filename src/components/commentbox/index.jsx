import { Box } from "@mui/material";
import { useState } from "react";
import StyledButton from "../button";
import Input from '../input';
import {createComment} from '../../services/comment';
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
export default function CommentBox({id}) {
    const router = useRouter();
    const [comment, setComment] = useState({id:id,comment:''})
    const {enqueueSnackbar} = useSnackbar()
    const handleChange = (e)=>{setComment({...comment,comment:e.target.value})}
    const handleSubmit = async()=>{
        const res = await createComment(comment);
        if(!res.status){
            router.push('/login')
            return enqueueSnackbar(res.message,{variant:'error'})
        }
        enqueueSnackbar(res.message,{variant:'success'});
        router.push(router.asPath)
        setComment({id:id,comment:''});
    }

    return (
        <Box sx={{ maxWidth:'700px',mt:'20px'}}>
            <Input
                type={'text'}
                placeholder={'enter your comment'}
                label={'Comment'}
                multiline={true}
                rows={3}
                handleChange={handleChange}
                value={comment.comment}
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