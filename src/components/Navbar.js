import React from 'react'
import {Box, Flex, Spacer,Heading} from '@chakra-ui/react'
import DarkButton from './NavbarComponents/DarkButton'
import Links from './NavbarComponents/Links'

import { useSelector } from 'react-redux'

const Navbar = () => {

    const dark = useSelector((state)=> state.theme.value)

  return (
    <>
        <Box position={'sticky'} top='0'  bg={dark ? 'white' : 'gray.900'} w='100%' h={'90px'} p={4} color='white'>
            
            <Flex alignItems='center'>
                <Box>
                    <Heading size='2xl' color={dark ? 'blue.600' : 'blue.500'}>NO-Flix</Heading>
                </Box>

                    <Spacer/>

                <Box>
                    <Links/>
                </Box>
                    <Spacer/>
                <Box>
                    <DarkButton/>
                </Box>

            </Flex>

        </Box>
    </>
  )
}

export default Navbar