import { Box } from "@mui/material";
import Navbar from '../Navbar';
export default function Layout({ children }) {
    return (
        <>
            <Box>
                <Navbar />
                <Box sx={{marginTop:6,pt:5,px:{xs:2,sm:4,md:6,lg:10}}}>
                    {children}
                </Box>
            </Box>
        </>
    )
}