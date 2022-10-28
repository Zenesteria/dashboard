import type { NextPage } from 'next'
import { SplitLayout } from '../Components/Layouts'
import {Box, Button, Typography} from '@mui/material'
import { Banner, Inbox, Period, Progress, Report } from '../Components/dashboard'
import Desktop from '../public/img/desktop.svg'
import Image from 'next/image'


const Home: NextPage = () => {
  return (
    <>
        <Box height={'fit-content'} width='100%'>
            <Box>
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

              <Banner
                  img={<Image className=' drop-shadow-xl' width={200} src={Desktop} alt=''/>}
                  content={{
                    title:'Welcome to Material Kit Pro v5!',
                    subtitle:'Your dashboard has been improved! Explore new features like Notifications, Search, Jobs Platform and more.'
                  }}
                  highlights={[{txt:'New!'}]}
                  ctaButton={
                    <Button className='bg-[#EBD494] border-[2px] border-transparent shadow-sm font-bold text-[#053F4D] rounded-lg' 
                      sx={{
                        width:'fit-content',
                        padding:'0.7rem 1rem', 
                        textTransform:'none',
                        transition:'.3s',
                        '&:hover':{
                            backgroundColor:'#EBD494',
                            boxShadow:'0px 5px 20px rgba(0,0,0,0.08)',
                            transform:'scale(1.05)'
                        }
                      }}>
                        Dismiss Banner
                    </Button>}
              />

              <br />

              
             
              <Progress
                
                />

                <br />

              <Inbox/>
            </Box>
        </Box>
    </>
  )
}

export default Home
