import React from 'react'
import { HStack, Box, Image, Heading, Stack, Button, Circle } from '@chakra-ui/react'
import RatingContainer from '../allMovieComponents/RatingContainer'

const TopContainer = ({title, img, rating, reviewCount}) => {
  return (
    <>
        <Box display={'flex'} px='5px'>
                <Box mx={'3px'}>
                <Circle size='40px' bg='tomato' color='white'>
                    {rating}
                </Circle>
                </Box>
            
            <HStack spacing='24px'>
                <Box borderRadius='lg' w='230px' h='280px' bg='yellow.200'>
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
            </HStack>
            </Box>
    </>
  )
}

export default TopContainer