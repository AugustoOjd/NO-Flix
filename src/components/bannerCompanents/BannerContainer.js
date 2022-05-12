import React from 'react'
import {Box, Heading, Stack, Text, Button} from '@chakra-ui/react'
import {ArrowForwardIcon} from '@chakra-ui/icons'

const BannerContainer = () => {
  return (
    <>
        <Box borderRadius='lg' bg={'gray.100'} w={{base: '200px', md: '450px'}} h={{base: '200px', md: '380px'}} ml={'50px'} mb={'50px'} >
          
          <Stack direction={'column'} spacing='1px' w={'100%'} h={'100%'}>
            <Box borderTopRadius={'lg'} w='100%' h='20%' bg='yellow.200'>
              <Heading>
                Titulo del fondo
              </Heading>
            </Box>
            <Box p={3} w='100%' h='70%' bg='tomato'>
              <Text>
                Descripcion de la misma
              </Text>
            </Box>
            <Box borderBottomRadius={'lg'} display={'flex'} justifyContent='end' w='100%' h='10%' >
              <Button size={{base: 'xs', md: 'md'}} fontSize={{base: 'xs', md: 'md'}} position={'static'} rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
                Informacion
              </Button>
            </Box>
          </Stack>

          </Box>

    </>
  )
}

export default BannerContainer