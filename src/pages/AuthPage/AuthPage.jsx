import React from 'react'
import { Box, Container, Flex, Image, VStack } from '@chakra-ui/react'
import AuthForm from '../../components/AuthForm'

export default function AuthPage() {
    return (
        <Flex minH={"100vh"} justifyContent={"center"}
            alignItems={"center"} px={4}>
            <Container maxW={"container.md"} padding={0}>
                <Flex justifyContent={"center"} gap={10} alignContent={"center"}>
                    {/* Left side */}
                    <Box display={{ base: "none", md: "block" }}>
                        <Image src='/auth.png' h={550} alt='Phone img' />
                    </Box>

                    {/* Right side */}
                    <VStack spacing={4} align={"stretch"} >
                        <AuthForm />
                        <Box textAlign={"center"}>
                            Get The app.
                        </Box>
                        <Flex gap={5} justifyContent={"center"}>
                            <Image src='/playstore.png' h={"10"} alt='Playstore.png' />
                            <Image src='/microsoft.png' h={"10"} alt='Microsoft.png.png' />
                        </Flex>
                    </VStack>
                </Flex>





            </Container>
        </Flex>
    )
}
