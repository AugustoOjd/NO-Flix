import React from 'react'
import { Box, IconButton, Stack, HStack, Divider } from '@chakra-ui/react'
import {AiFillInstagram, AiFillFacebook, AiFillTwitterCircle, AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <>
        <Box display={'flex'} justifyContent='center' bg='gray.800' w='100%' h={{base: '300px', md: '450px'}} p={10} color='white'>

        <Stack display={'flex'} alignItems='center' direction={'column'} spacing='24px' w={'100%'}>
        <Box bg={'blue.100'} display={'flex'} justifyContent='space-evenly' alignItems={'center'} h='50px' color='white' w={'30%'}>
              <IconButton
                  variant='solid'
                  colorScheme='blue'
                  aria-label='Send email'
                  icon={<AiFillInstagram />}
                />
                <IconButton
                variant='solid'
                colorScheme='blue'
                aria-label='Send email'
                icon={<AiFillFacebook />}
              />
              <IconButton
                variant='solid'
                colorScheme='blue'
                aria-label='Send email'
                icon={<AiFillTwitterCircle />}
              />
                <IconButton
                variant='solid'
                colorScheme='blue'
                aria-label='Send email'
                icon={<AiFillGithub />}
              />
            </Box>

            <Box bg='gray.500' w='100%' h='300px'>
              <HStack spacing='10px' w={'100%'} h='100%'>
                <Box w='33%' h='100%' bg='yellow.200'>
                  1
                </Box>
                <Divider orientation='vertical' />
                <Box w='33%' h='100%' bg='tomato'>
                  2
                </Box>
                <Divider orientation='vertical' />
                <Box w='33%' h='100%' bg='pink.100'>
                  3
                </Box>
              </HStack>

            </Box>

          </Stack>


        </Box>
    </>
  )
}

export default Footer