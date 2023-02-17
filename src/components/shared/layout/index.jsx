import { Box } from "@mui/material";
import Navbar from '../Navbar';
export default function Layout({ children }) {
    return (
        <Box>
            <Navbar />
            <Box marginTop={6} pt={5} px={10}>
                {children}
            </Box>
        </Box>
    )
}