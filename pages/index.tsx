import type { NextPage } from 'next'
import { SplitLayout } from '../Components/Layouts'
import {Box, Typography} from '@mui/material'
import { Period, Report } from '../Components/dashboard'


const Home: NextPage = () => {
  return (
    <>
        <Box minHeight={'120vh'} height={'fit-content'} width='100%'>
            <Box sx={{
              height:'10vh'
            }}>
              <SplitLayout leftWeight={2} rightWeight={1}>
                  <Typography sx={{
                    display:'flex',
                    alignItems:'center',
                    height:'100%',
                    fontWeight:'bold',
                    fontSize:'2rem'
                  }}>
                      Good Morning
                  </Typography>

                  <Box sx={{
                    height:'100%',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                  }}>
                      <Report/>
                      <Period/>
                  </Box>

              </SplitLayout>
              
            </Box>
        </Box>
    </>
  )
}

export default Home
