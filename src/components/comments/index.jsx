import { Avatar, Card, CardHeader, CardContent, IconButton, Typography, Box } from "@mui/material";
import moment from "moment/moment";
export default function Comments({item}) {
    return (
        <Box sx={{padding:'20px'}}>
        <Typography variant="h6" component={'div'}>Comments</Typography>
        <Box sx={{padding:'20px',display:'flex',flexDirection:'column',gap:'20px','&>*:nth-child(even)':{marginLeft:'100px'}}}>
        {item.map(({comment,userId,createdAt},index)=>(
            <Card key={index} sx={{maxWidth:'30rem',background:'#f4f4f4'}}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: 'red' }} aria-label="profile">
                        Q
                    </Avatar>
                }
                title="Qaiser Hussain"
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