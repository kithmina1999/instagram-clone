import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { useLocation } from 'react-router'
import Sidebar from '../../components/Sidebar';

const PageLayout = ({ children }) => {
  const{pathname} = useLocation();
  return (
    <Flex>
      {/* side-bar on the left */}
      {pathname !== '/auth' ? (
        <Box w={{ base: "70px", md: "240px" }}>
          <Sidebar />
        </Box>
      ) : null}

      {/* the page content over right */}
      <Box flex={1} w={{ base: "calc(100%-70%)", md: "calc(100%-240%)" }}>
        {children}
      </Box>
    </Flex>
  )
}

export default PageLayout