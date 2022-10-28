import React from 'react'
import {Box} from '@mui/material'
import {FaSearch, FaUsers, FaBell, FaUser} from 'react-icons/fa'
import Avatar from '../../../public/img/avatar.png'
import { SplitLayout } from '../../Layouts'
import Image from 'next/image'

export default function UserNav() {
  return (
    <Box sx={{
        width:'100%',
        height:'fit-content',
        padding:'0.5rem',
        backgroundColor:'#194956',
        borderBottom:'0.5px solid rgba(255,255,255,0.5)'
    }}>
        <SplitLayout leftWeight={4} rightWeight={1}>
            <></>
            <Box sx={{
                display:'flex',
                alignItems:'center',
                justifyContent:'end',
                height:'100%',
                color:'rgba(255,255,255,0.6)',
                fontSize:'1.3rem'
            }}>

                

                <div className="iconContainer mx-3 w-fit h-fit">
                    <div className="relative iconItem" data-icon-name='contacts' data-count={'3'}>
                        <FaUsers
                            className='relative'
                        />
                    </div>
                </div>

                <div className="iconContainer mx-3 w-fit h-fit">
                    <div className="relative notification iconItem" data-icon-name='notifications' data-count={'3'}>
                        <FaBell
                            className='relative'
                        />
                    </div>
                </div>

                <Image
                    src={Avatar}
                    alt='Avatar'
                    width={40}
                    className='rounded-full mx-3'
                />
            </Box>
        </SplitLayout>

    </Box>
  )
}



