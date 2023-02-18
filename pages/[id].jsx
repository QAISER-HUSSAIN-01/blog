import { Box, Typography } from "@mui/material";
import Comment from "../src/components/comment";
import {getBlog} from '../src/services/blog'

export default function BlogDetail({blog}){
    return(
    <Box>
         <Typography variant="h5" component='div'> {blog ? blog.title :'not found'} </Typography>
         <Typography variant="body2" component='div' color={'grey'}> {blog ? blog.description :'not found'} </Typography>
         <Comment />
    </Box>
    );
}


export async function getServerSideProps(context){
     const {id} = context.params;
     const res = await getBlog(id);
     if(!res.status){return{props:{blog:''}}}
     return{
        props:{blog:res.data}
    }
}