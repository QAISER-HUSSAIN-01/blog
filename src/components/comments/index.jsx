import { Avatar, Card, CardHeader, CardContent, IconButton, Typography, Box } from "@mui/material";
import moment from "moment/moment";
export default function Comments({comments}) {
    return (
        <Box sx={{border:'1px solid lightgrey',borderRadius:'5px',marginTop:'10px'}}>
        <Typography variant="h6" component='div' sx={{padding:'10px',background:'#f4f4f4'}}>Comments</Typography>
        <Box sx={{padding:{xs:'5px',sm:'5px',md:'20px',lg:'20px'},display:'flex',flexDirection:'column',gap:'20px','&>*:nth-child(even)':{marginLeft:{sx:'0px',sm:'0px',md:'100px',lg:'100px'}}}}>
        {comments[0] ? comments.map(({comment,userId,createdAt},index)=>(
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
        ))
    :
    "no comments on this post yet"
    }
        </Box>
        </Box>
    )
}