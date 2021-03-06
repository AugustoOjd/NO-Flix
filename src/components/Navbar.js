import React from 'react'
import {Box, Flex, Spacer,Heading, Button, Input} from '@chakra-ui/react'
import DarkButton from './NavbarComponents/DarkButton'
import Links from './NavbarComponents/Links'

import { useSelector } from 'react-redux'

const Navbar = () => {

    const dark = useSelector((state)=> state.theme.value)


  return (
    <>
        <Box position={'fixed'} overflow='none' top='0'  bg={dark ? 'white' : 'gray.900'} w='100%' h={'90px'} p={4} color='white'>
            
            <Flex alignItems='center'>
                <Box>
                    <Heading display={{base: 'none', md: 'flex'}} size={ '2xl'} color={dark ? 'blue.600' : 'blue.400'}>NO-Flix</Heading>
                    <Heading display={{base: 'flex', md: 'none'}} size={'3xl'} color={dark ? 'blue.600' : 'blue.400'}>N</Heading>
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