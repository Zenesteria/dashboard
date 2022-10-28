import React from 'react'
import {Box, Typography} from '@mui/material'
import { SplitLayout } from '../Layouts'

export default function Progress() {
  return (
    <Box sx={{
      backgroundColor:'#194956',
      border:'0.5px solid rgba(255,255,255,0.5)',
      borderRadius:'10px',
      width:'100%',
      height:'fit-content',
    }}>
        <Box sx={{
          padding:'2rem'
        }}>
          
            <Box sx={{
              display:'flex',
            }}>
              <Box sx={{
                  flex:1
                }}>
                    <div className="circle" style={{background:`conic-gradient(#9EEFE5 ${20}deg, #00000087 0deg)`}}>

                    </div>
                </Box>

                <Box sx={{
                  flex:3
                }}>
                    <Typography className='font-extralight' sx={{
                      fontSize:'1.2rem',
                      color:'#9EEFE5',
                      marginBottom:'1rem'
                    }}>
                      Project Name:
                    </Typography> 
                </Box>
            </Box>
        </Box>
        <hr className='w-full border-[0.5px] border-[#ffffff34]' />
    </Box>
  )
}
