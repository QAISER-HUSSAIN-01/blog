import { Card, CardMedia, CardContent, CardActions, Typography } from '@mui/material';
import Link from 'next/link'
export default function BlogCard({ item }) {

    return (
        <Card sx={{ '&:hover': { boxShadow: '2px 2px 5px black ' } }}>
            <CardMedia
                sx={{ height: 150, width: '100%' }}
                image={item.img}
                title={item.title}
            />
            <CardContent>
                <Typography variant='h6' component='div'>{item.title}</Typography>
                <Typography variant='body2' component='div'>{item.caption}</Typography>
            </CardContent>
            <CardActions>
                <Link href={`/${item._id}`}>Read</Link>
                {/* <Link href={`/${item.id}`}>Share</Link> */}
            </CardActions>
        </Card>
    )
}