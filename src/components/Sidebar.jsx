import { Box, Flex, Link } from '@chakra-ui/layout'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo } from '../assets/constants'
import { CreatePostLogo } from '../assets/constants'
import {AiFillHome} from 'react-icons/ai'
import { Tooltip } from '@chakra-ui/tooltip'
import { Avatar } from '@chakra-ui/avatar'
function Sidebar() {

    const sidebarItems =[
        
        {
            icon:<AiFillHome size={25} />,
            text:"Home",
            link:"/"
        },
        {
            icon:<SearchLogo />,
            text:"Search"
        },
        {
            icon:<NotificationsLogo />,
            text:"Notification"
        },
        {
            icon:<CreatePostLogo />,
            text:"Create"
        },
        {
            icon:<Avatar size={"sm"} name='Burak Orkmez' src='/profilepic.png' />,
            text:"Home",
            link:"/"
        },
    ]

  return (
    <Box
    height={"100vh"}
    borderRight={"1px solid"}
    borderColor={"whiteAlpha.200"}
    py={8}
    position={'sticky'}
    top={0}
    left={0}
    px={{base:2,md:4}}
    >
        <Flex direction={'column'} gap={10} w="full" height={"full"}>
            <Link to={"/"} as={RouterLink} pl={2} display={{base:"none",md:"block"}} cursor="pointer">
                <InstagramLogo />
            </Link>
            <Link to={"/"} as={RouterLink} pl={2} display={{base:"block",md:"none"}} cursor="pointer"
            borderRadius={6} _hover={{bg:"white.alpha.200"}}
            w={10} >
                <InstagramMobileLogo />
            </Link>
            <Flex direction={'column'} gap={5} cursor={'pointer'}>
                {sidebarItems.map((item,index)=>(
                    <Tooltip
                    key={index}
                    hasArrow
                    label={item.text}
                    placement='right' 
                    ml={1}
                    openDelay={500}
                    display={{base:"block",md:"none"}}>
                    
                    <Link
                    display={"flex"}
                    to={item.link || null}
                    as={RouterLink}
                    alignItems={"center"}
                    gap={4}
                    _hover={{bg:"whiteAlpha.400"}}
                    borderRadius={6}
                    p={2}
                    w={"full"}
                    >
                        {item.icon}
                        <Box display={{base:"none",md:"block"}}>
                        {item.text}
                        </Box>
                    </Link>
                    </Tooltip>
                ))}
            </Flex>
        </Flex>
    </Box>
  )
}

export default Sidebar