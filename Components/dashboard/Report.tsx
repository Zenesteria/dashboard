import React from 'react'
import {Button} from '@mui/material'
import {HiOutlineDocumentReport} from 'react-icons/hi'

export default function Report() {
  return (
    <Button sx={{
        alignSelf:'center',
        marginX:'1rem',
        padding:'0.5rem 1.5rem',
        border:'0.5px solid cyan',
        color:'cyan',
        width:'fit-content',
        textTransform:'none',
        textAlign:'center',
        fontSize:'0.8rem',
        fontWeight:'bold'
      }}>
          <HiOutlineDocumentReport className='mr-2 text-[1.3rem]'/>
          Reports
      </Button>
  )
}
