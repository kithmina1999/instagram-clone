import { Flex } from '@chakra-ui/react'
import React from 'react'

const PageLayout = ({children})=>{
  return (
    <Flex>
        {/* side-bar on the left */}
        <Box>
            <Sidebar />
        </Box>
        {/* the page content over right */}
        <Box>
            {children}
        </Box>
    </Flex>
  )
}

export default PageLayout