import React from 'react'
import { SplitLayout } from '../Layouts'
import {Box, Typography} from '@mui/material'
import Image from 'next/image'

interface compProp{
    img:React.ReactElement,
    content:{
        title:string,
        subtitle:string,
    },
    ctaButton?:React.ReactElement,
    highlights?:{
        txt:string
    }[]
}

export default function Banner({img,content, ctaButton, highlights}:compProp) {
  return (
    <div className='w-full bg-[#9EEFE5] p-10 rounded-xl text-[#123038]'>
        <SplitLayout leftWeight={1} rightWeight={3}>
            <>
                {img}
            </>

            <Box sx={{
                marginX:'2rem',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                height:'100%'
            }}>
                <Box sx={{
                    height:'',
                    padding:'1rem'
                }}>
                    {highlights?.map((highlight, index) => {
                        return(
                            <Typography key={index}
                                sx={{
                                    borderRadius:'9999px',
                                    backgroundColor:'#EBD494',
                                    width:'fit-content',
                                    padding:'0.5rem 1rem',
                                    fontSize:'0.8rem'
                                }}
                            >
                                {highlight.txt}
                            </Typography>
                        )
                    })}
                </Box>

                <Typography sx={{
                    fontSize:'2rem',
                    fontWeight:'bold',
                    marginTop:'auto'
                }}>
                    {content.title}
                </Typography>

                <Typography sx={{
                    fontSize:'0.8rem',
                    marginBottom:'auto'
                }}>
                    {content.subtitle}
                </Typography>

                {ctaButton}
            </Box>

        </SplitLayout>
    </div>
  )
}
