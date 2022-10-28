import React from 'react'
import Box from '@mui/material/Box'
import SplitLayout from './SplitLayout'
import { DashboardNav, UserNav } from '../dashboard'

export default function DashboardLayout({children}:any) {
  return (
    <>
        <Box height={'100vh'} color='white'>
            <Box sx={{
                position:'fixed',
                backgroundColor:'red',
                width:'100%',
                height:'0'
                
            }}>
                <SplitLayout leftWeight={1} rightWeight={4}>
                    <DashboardNav/>
                    <UserNav/>
                </SplitLayout>
            </Box>
            
            <SplitLayout leftWeight={1} rightWeight={4}>
                <></>
                <Box sx={{
                    backgroundColor:'#123038',
                    padding:'15vh 1rem 1rem 2rem',
                    width:'100%'
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
