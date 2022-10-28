import React from 'react'
import { SplitLayout } from './Layouts'
import {Box} from '@mui/material'
import Image from 'next/image'

interface compProp{
    img:typeof Image,
    content:{
        title:string,
        subtitle:string,
    },
    ctaButton:React.ReactElement
}

export default function Banner({img,content}:compProp) {
  return (
    <div className='w-full bg-cyan-300'>
        <SplitLayout leftWeight={1} rightWeight={3}>
            <>
                {img}
            </>

            <Box>
                {content.title}
            </Box>

        </SplitLayout>
    </div>
  )
}
