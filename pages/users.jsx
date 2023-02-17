import { IconButton } from "@mui/material";
import axios from "axios"
import {MdDelete} from 'react-icons/md'
import {useSnackbar} from 'notistack'
import { deleteUser } from "../src/services/user";


export default function Users({users}){
    
    const {enqueueSnackbar} = useSnackbar();
    const handleDelete = async (id)=>{
       const res =  await deleteUser(id);
       if(!res.status){
        return enqueueSnackbar(res.message,{variant:'error'})
    }
    enqueueSnackbar(res.message,{variant:'success'})
    console.log('response back', res);
    }
    return(<div>
        <h1>user list</h1>
        <ul>
            {users.data.map((item)=>(
                <li key={item._id} style={{display:'flex',justifyContent:'space-between'}}>
                     <span>{item.email}</span>  
                     <IconButton onClick={()=>handleDelete(item._id)}><MdDelete /></IconButton>
                </li>
            ))}
        </ul>
    </div>)
}

export async function getServerSideProps(){
    const res = await axios.get(`http://localhost:3000/api/user`);
    if(!res.status){return}
    return{
        props:{
            users:res.data
        }
    }
}