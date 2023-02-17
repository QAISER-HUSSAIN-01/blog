import { Box, Typography } from "@mui/material";
import Comment from "../src/components/comment";

export default function BlogDetail(){
    return(
    <Box>
         <Typography variant="h5" component='div'> Blog Title </Typography>
         <Typography variant="body2" component='div' color={'grey'}> blog description </Typography>
         <Comment />
    </Box>
    );
}