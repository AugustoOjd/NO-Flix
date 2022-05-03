import React from 'react'
import {Box, Heading, Stack, Text, Button} from '@chakra-ui/react'
import {ArrowForwardIcon} from '@chakra-ui/icons'

const BannerContainer = () => {
  return (
    <>
        <Box bg={'gray.100'} w='450px' h='350px' margin={'50px'} >
          
          <Stack direction={'column'} spacing='2px'>
            <Box w='100%' h='100px' bg='yellow.200'>
              <Heading>
                Titulo del fondo
              </Heading>
            </Box>
            <Box w='100%' h='210px' bg='tomato'>
              <Text>
                Descripcion de la misma
              </Text>
            </Box>
            <Box display={'flex'} justifyContent='end' w='100%' h='40px' bg='pink.100'>
              <Button position={'static'} rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
                Informacion
              </Button>
            </Box>
          </Stack>

          </Box>

    </>
  )
}

export default BannerContainer