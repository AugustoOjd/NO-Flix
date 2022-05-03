import React from 'react'
import {Box, Stack, Image, Heading, Button } from '@chakra-ui/react'
import RatingContainer from './RatingContainer'

const moviesContainer = ({title, img, rating, reviewCount}) => {
  return (
    <>
                <Box borderRadius='lg' w='230px' h='280px' bg='yellow.200' margin={4}>
                    <Image h='55%' w={'100%'} borderTopRadius={'lg'} src={img} alt={''} />

                    <Box h='25%'>
                        <Heading as='h3' size='lg'>
                            {title}
                        </Heading>
                    </Box>

                    <Box display={'flex'} justifyContent='space-evenly' w={'100%'}>
                        
                        <Stack direction={'row'} spacing='5px' p={2} w='100%'>
                            <Box display={'flex'} alignItems='center'  w='60%' h='40px' bg='blue.300' fontSize={'xs'}>
                                {reviewCount} Votos


                            <RatingContainer rating={rating}/>

                            </Box>
                            <Box display={'flex'} alignItems='center' w='20%' h='40px' bg='red.400' fontSize={'xs'}>
                                <Button position={'static'} colorScheme='blue'>Votar</Button>
                            </Box>
                            <Box display={'flex'} alignItems='center' fontSize='xs' w='20%' h='40px' bg='pink.400'>
                                <Button position={'static'} colorScheme='blue'>Info</Button>
                            </Box>
                        </Stack>
                    </Box>

                </Box>
    </>
  )
}

export default moviesContainer