import React from 'react'
import { Box, IconButton, Stack, HStack, Divider, Link, Center } from '@chakra-ui/react'
import {AiFillInstagram, AiFillFacebook, AiFillTwitterCircle, AiFillGithub} from 'react-icons/ai'
import { useSelector } from 'react-redux'

const Footer = () => {

  const theme = useSelector((state)=> state.theme.value)

  return (
    <>
        <Box display={'flex'} justifyContent='center' bg={theme ? 'gray.300' : 'gray.900'} w='100%' h={{base: '250px', md: '350px', lg: '400px'}} p={10} color='white'>

        <Stack display={'flex'} alignItems='center' direction={'column'} spacing='24px' w={'100%'}>
        <Box display={'flex'} justifyContent='space-evenly' alignItems={'center'} h='50px' color='white' w={{base: '60%', md: '40%'}}>
              <IconButton
                  fontSize={{base: 'xl', md: '3xl'}}
                  colorScheme='blue'
                  aria-label='Send email'
                  variant={theme ? 'outline' : 'solid'}
                  icon={<AiFillInstagram />}
                />
                <IconButton
                fontSize={{base: 'xl', md: '3xl'}}
                variant={theme ? 'outline' : 'solid'}
                colorScheme='blue'
                aria-label='Send email'
                icon={<AiFillFacebook />}
              />
              <IconButton
                fontSize={{base: 'xl', md: '3xl'}}
                variant={theme ? 'outline' : 'solid'}
                colorScheme='blue'
                aria-label='Send email'
                icon={<AiFillTwitterCircle />}
              />
                <IconButton
                fontSize={{base: 'xl', md: '3xl'}}
                variant={theme ? 'outline' : 'solid'}
                colorScheme='blue'
                aria-label='Send email'
                icon={<AiFillGithub />}
              />
            </Box>

            <Box bg={theme ? 'white' : 'gray.900'} w='100%' h={{base: '100px', md: '300px'}} borderRadius={'base'}>
              <HStack spacing='10px' w={'100%'} h='100%' >
              <Divider orientation='vertical' />
                <Box color={theme ? 'blue.600' : 'white'} display={'flex'} flexFlow={'column'} w='33%' h='100%' >
                  <Link fontSize={{base: 'xs', md: '2xl', lg: '4xl'}}>Javascript</Link>
                  <Link fontSize={{base: 'xs', md: '2xl', lg: '4xl'}}>React</Link>
                  <Link fontSize={{base: 'xs', md: '2xl', lg: '4xl'}}>Redux</Link>
                  <Link fontSize={{base: 'xs', md: '2xl', lg: '4xl'}}>Chakra UI</Link>
                  <Link fontSize={{base: 'xs', md: '2xl', lg: '4xl'}}>Gsap</Link>
                </Box>
                <Divider orientation='vertical' />
                <Box color={theme ? 'blue.600' : 'white'} display={'flex'} flexFlow={'column'} w='33%' h='100%' >
                    <Link fontSize={{base: 'xs', md: '2xl', lg: '4xl'}}>About</Link>
                    <Link fontSize={{base: 'xs', md: '2xl', lg: '4xl'}}>Contacto</Link>
                    <Link fontSize={{base: 'xs', md: '2xl', lg: '4xl'}}>Soporte</Link>
                  </Box>
                <Divider orientation='vertical' />
                <Box color={theme ? 'blue.600' : 'white'} display={'flex'} flexFlow={'column'} w='33%' h='100%' >
                  <Link fontSize={{base: 'xs', md: '2xl', lg: '4xl'}}>Dirección</Link>
                      <Link fontSize={{base: 'xs', md: '2xl', lg: '4xl'}}>Privacidad</Link>
                      
                  </Box>
              </HStack>

            </Box>

          </Stack>

          
        </Box>
        <Center color={theme ? 'black' : 'white'} bg={theme ? 'white' : 'gray.700'}>© Augusto Ojeda, 2022</Center>
    </>
  )
}

export default Footer