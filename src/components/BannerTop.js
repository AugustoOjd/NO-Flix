import React from 'react'
import { HStack, Box } from '@chakra-ui/react'

const BannerTop = () => {
  return (
    <>
        <Box bg='green.300' w='100%' h={'320px'} p={4} color='white'>
            <HStack spacing='24px'>
                <Box w='40px' h='40px' bg='yellow.200'>
                    1
                </Box>
                <Box w='40px' h='40px' bg='tomato'>
                    2
                </Box>
                <Box w='40px' h='40px' bg='pink.100'>
                    3
                </Box>
            </HStack>
        </Box>

    </>
  )
}

export default BannerTop