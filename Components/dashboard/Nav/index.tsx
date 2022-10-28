import {Box, Typography, Button} from '@mui/material'
import Image from 'next/image'
import Logo from '../../../public/img/logooutline.png'
import NavLink from './NavLink'
import User from './User'
import {FaHome, FaUserAlt, FaServicestack, FaFacebookMessenger} from 'react-icons/fa'


interface compProp{

}

export default function Nav({}:compProp) {
  const navItems:{title:string, icon:any, path:string}[] = [
    {
      title:'Overview',
      icon:<FaHome/>,
      path:'/'
    },
    {
      title:'Services',
      icon:<FaServicestack/>,
      path:'/services'
    },
    {
      title:'Chat',
      icon:<FaFacebookMessenger/>,
      path:'/chat'
    },
    {
      title:'Account',
      icon:<FaUserAlt/>,
      path:'/account'
    },
  ]
  return (
    <Box
      sx={{
        display:'flex',
        flexDirection:'column',
        height:'100vh',
        overflow:'auto',
        minWidth:'250px',
        borderRight:'0.5px solid rgba(255,255,255,0.5)',
        backgroundColor:'#174956',
        '&::-webkit-scrollbar':{
            width:'5px'
        },
        '&::-webkit-scrollbar-thumb':{
            backgroundColor:'rgba(0,0,0,0.3)'
        },
        width:'100%'
      }}>
        <Box padding={'1.5rem'} borderBottom={'0.5px solid rgba(255,255,255,0.5)'}>
          <Box marginBottom={'1.5rem'}>
              <Image
                alt='Logo'
                src={Logo}
                width={20}
              />
          </Box>

          <User/>
        </Box>

        <Box sx={{
          padding:'2.5rem 1rem 1rem 1rem',
          borderBottom:'0.5px solid rgba(255,255,255,0.5)',
          height:'100%',
          fontSize:'1.3rem'
        }}>
            <Typography sx={{
            fontWeight:'bold',
            marginBottom:'1rem',
            marginX:'1rem'
            }}
            color={'rgba(255,255,255,0.5)'} variant="body2">
                General
            </Typography>

            {navItems.map((navItem,index) => {
                return(
                  <NavLink
                    key={index}
                    txt={navItem.title}
                    path={navItem.path}
                    icon={navItem.icon}
                  />
                )
            })}
        </Box>

        <Box sx={{
          padding:'2rem 1rem'
        }}>
          <Typography>
              Need Help?
          </Typography>

          <Typography sx={{
            color:'rgba(255,255,255,0.5)',
            marginBottom:'1rem'
          }}>
              Contact Us
          </Typography>

          <Button className='bg-[#9EEFE5]' sx={{
            color:'black',
            width:'100%',
            paddingY:'1rem',
            '&:hover':{
              backgroundColor:'#9EEFE5',
              letterSpacing:'0.15rem'
            },
            transition:'0.3s',
          }}>
              Send an Email
          </Button>
        </Box>
    </Box>

  )
}
