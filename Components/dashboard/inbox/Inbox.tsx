import {Box, Typography} from '@mui/material'
import {v4 as uuid} from 'uuid'
import InboxItem from './InboxItem'

const data = [
    {
        user:{
            id:uuid(),
            user_name:'Marcus Finn',
            user_img:'https://images.pexels.com/photos/13974138/pexels-photo-13974138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            msg:'Hello, we spoke earlier on the phone',
            time:'120000'
        }
    }
]

export default function Inbox() {
  return (
    <Box sx={{
        display:'flex',
        flexDirection:'column',
        backgroundColor:'#194956',
        border:'0.5px solid rgba(255,255,255,0.5)',
        borderRadius:'10px'
    }}>
        <Box sx={{
            width:'100%',
            borderBottom:'0.5px solid rgba(255,255,255,0.5)',
            padding:'0.5rem 1rem'
        }}>
            <Typography sx={{
                textTransform:'none',
                fontWeight:'bold',
                fontSize:'1.5rem'
            }}>
                    Inbox
            </Typography>
        </Box>
        <Box>
            <InboxItem/>
            <InboxItem/>
            <InboxItem/>
        </Box>
    </Box>
  )
}
