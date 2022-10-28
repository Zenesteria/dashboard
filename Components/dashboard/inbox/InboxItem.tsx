import {Box, Typography} from '@mui/material'
import {AiFillDelete} from 'react-icons/ai'

export default function InboxItem() {
  return (
    <Box className='group' sx={{
        width:'100%',
        padding:'1rem',
        borderBottom:'0.5px solid rgba(255,255,255,0.5)',
        marginBottom:'1rem',
        position:'relative',
        overflow:'hidden',
        cursor:'pointer'
    }}>
        <Typography sx={{
            fontWeight:'600',
            fontSize:'1.1rem',
            letterSpacing:'0.25rem'
        }}>
            The Message Title
        </Typography>
        <p className='font-extralight max-w-[600px]' style={{fontSize:'calc(0.5rem + 0.25vw)'}}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi nesciunt
             sint animi magni amet optio quidem dolorum excepturi. Cum, quaerat. . .
        </p>
        <Box className='opacity-0 group-hover:opacity-100 duration-300' sx={{
            background:'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)',
            height:'100%',
            width:'15%',
            zIndex:'999',
            position:'absolute',
            right:'0',
            top:'0',
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
        }}>
            <AiFillDelete
                className='text-red-500 text-[1.2rem]'
            />
        </Box>
    </Box>
  )
}
