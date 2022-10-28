import React from 'react'
import Box from '@mui/material/Box'
import SplitLayout from './SplitLayout'
import { DashboardNav, UserNav } from '../dashboard'

export default function DashboardLayout({children}:any) {
  return (
    <>
        <Box height={'fit-content'} sx={{fontFamily:'Raleway, sans-serif !important'}} color='white'>
            <Box sx={{
                position:'fixed',
                backgroundColor:'red',
                width:'100%',
                height:'0',
                zIndex:'99999'
                
            }}>
                <SplitLayout leftWeight={1} rightWeight={4}>
                    <DashboardNav/>
                    <UserNav/>
                </SplitLayout>
            </Box>
            
            <SplitLayout leftWeight={1} rightWeight={4}>
                <Box></Box>
                <Box sx={{
                    backgroundColor:'#053F4D',
                    padding:'15vh 1rem 1rem 2rem',
                    width:'100%',
                    height:'fit-content'
                }}>
                    <>
                    {children}
                    </>
                </Box>
            </SplitLayout>
        </Box>
    </>
  )
}
