import React from 'react'
import {Box, Stack, Image, Heading, Text, Center} from '@chakra-ui/react'

const InfoMovies = ({title, age, rating, category, img}) => {
  return (
    <>
        <Box bg='blue.300' w='100%' h={{base: '1000px', md: '600px'}} p={4} color='white'>
            <Stack direction={{base: 'column', md: 'row'}} spacing='24px' h={'100%'} w={'100%'}>
            <Box w={{base: '100%', md: '50%'}} h={{base: '50%', md: '100%'}} bg='yellow.200' >
                <Image h={'100%'} w={'100%'} src={img}/>
            </Box>
            <Box w={{base: '100%', md: '50%'}} h={{base: '50%', md: '100%'}} bg='tomato'>
                <Center>
                    <Heading>{title}</Heading>
                    <Text>{age}</Text>
                    <Text>{rating}</Text>
                    <Text>{category}</Text>
                </Center>
            </Box>
          </Stack>
        </Box>
    </>
  )
}

export default InfoMovies