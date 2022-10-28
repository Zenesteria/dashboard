import React from 'react'
import {Box, Typography} from '@mui/material'
import { useRouter } from 'next/router'
import Link from 'next/link';

export default function NavLink({icon, txt, path}:{icon:any, txt:string, path:string}) {
    const router = useRouter();
    const active = path ? (router.pathname == path) : false
    // console.log(router.pathname)
  return (
    <Link href={path} passHref>
        <Box
            sx={{
                display:'flex',
                padding:'0.5rem',
                alignItems:'center',
                borderRadius:'5px',
                marginY:'1rem',
                transitionDuration:'0.3s',
                backgroundColor:active ? 'rgba(255,255,255,0.08)':'transparent',
                color:active ? '#EBD494' : 'inherit',
                '&:hover': {
                    backgroundColor: 'rgba(255,255,255, 0.08)'
                },
                cursor:'pointer'
            }}
        >
            {icon}
            <Typography marginX={'0.5rem'}  fontWeight={'bold'}>
                {txt}
            </Typography>
        </Box>
    </Link>
  )
}
