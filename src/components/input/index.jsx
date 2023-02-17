import { TextField } from "@mui/material";

export default function Input({ type, placeholder, label, multiline, rows,name,handleChange,value }) {
    return (
        <TextField
            sx={{ marginBottom: '10px' }}
            type={type}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            label={label}
            name={name}
            multiline={multiline ? multiline : false}
            minRows={multiline ? rows : ''}
            fullWidth
        />
    )
}