import React from 'react'
import { HStack, Box } from '@chakra-ui/react'

const Links = () => {
  return (
    <>
        <HStack spacing='25px'>
        <Box w='100px' h='40px' bg='yellow.200'>
            1
        </Box>
        <Box w='100px' h='40px' bg='blue.200'>
            2
        </Box>
        <Box w='100px' h='40px' bg='pink.400'>
            3
        </Box>
        <Box w='100px' h='40px' bg='green.400'>
            4
        </Box>
        </HStack>
    </>
  )
}

export default Links