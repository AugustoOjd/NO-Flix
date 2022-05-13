import React from 'react'
import {Box, Heading, Stack, Text, Button} from '@chakra-ui/react'
import {ArrowForwardIcon} from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

const BannerContainer = ({title, id, description, banner}) => {
  return (
    <>
    <Box display={'flex'} justifyContent='start' alignItems={'end'} bg bgImage={banner} bgSize='cover' bgPosition="center" bgRepeat="no-repeat" w='100%' h={{base: '500px', md: '900px'}} color='white'>
        <Box borderRadius='lg' bg={'gray.100'} w={{base: '200px', md: '450px'}} h={{base: '200px', md: '380px'}} ml={'50px'} mb={'50px'} >
          
          <Stack direction={'column'} spacing='1px' w={'100%'} h={'100%'}>
            <Box borderTopRadius={'lg'} w='100%' h='20%' bg='yellow.200'>
              <Heading>
                {title}
              </Heading>
            </Box>
            <Box overflowY={'auto'} p={3} w='100%' h='70%' bg='tomato'>
              <Text>
                {description}
              </Text>
            </Box>
            <Box borderBottomRadius={'lg'} display={'flex'} justifyContent='end' w='100%' h='10%' >
              <Link  to={`/info/${id}`}>
              <Button size={{base: 'xs', md: 'md'}} fontSize={{base: 'xs', md: 'md'}} position={'static'} rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
                Informacion
              </Button>
              </Link>
            </Box>
          </Stack>

          </Box>
    </Box>
    </>
  )
}

export default BannerContainer