import { Button } from "@mui/material";

export default function StyledButton({text,color,handleClick}){
    return(
    <Button variant='contained' color={color} onClick={handleClick}>
        {text}
    </Button>
)
}
