import { Avatar, Card, CardHeader, CardContent, IconButton, Typography, Box } from "@mui/material";
import moment from "moment/moment";
export default function Comments({comments}) {
    return (
        <Box sx={{padding:{xs:'10px',sm:'10px',md:'20px',lg:'20px',border:'1px solid lightgrey',borderRadius:'5px'}}}>
        <Typography variant="h6" component='div' sx={{marginY:'10px'}}>Comments</Typography>
        <Box sx={{padding:{xs:'5px',sm:'5px',md:'20px',lg:'20px'},display:'flex',flexDirection:'column',gap:'20px','&>*:nth-child(even)':{marginLeft:{sx:'0px',sm:'0px',md:'100px',lg:'100px'}}}}>
        {comments.map(({comment,userId,createdAt},index)=>(
            <Card key={index} sx={{maxWidth:'30rem'}}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: 'orange' }} aria-label="profile">
                        {userId.name[0]}
                    </Avatar>
                }
                title={userId.name}
                subheader={moment(createdAt).calendar()}
            />
            <CardContent>
                <Typography variant="body2">{comment}</Typography>
            </CardContent>
        </Card>
        ))}
        </Box>
        </Box>
    )
}