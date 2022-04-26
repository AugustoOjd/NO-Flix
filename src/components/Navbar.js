import React from 'react'
import {Box, Flex, Spacer,Heading} from '@chakra-ui/react'
import DarkButton from './NavbarComponents/DarkButton'
import Links from './NavbarComponents/Links'

const Navbar = () => {
  return (
    <>
        <Box  bg='tomato' w='100%' h={'90px'} p={4} color='white'>
            
            <Flex alignItems='center'>
                <Box>
                    <Heading size='2xl'>NO-Flix</Heading>
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