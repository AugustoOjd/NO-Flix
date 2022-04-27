import React from 'react'
import { HStack, Box, Image, Heading, Stack, Button, Circle } from '@chakra-ui/react'
import {StarIcon} from '@chakra-ui/icons'



const movies = [
    {
        id: 1,
        title: 'Arcane',
        description: 'Arcane es una buena serie',
        img: 'https://i.blogs.es/79f36c/portada-analisis-trailer-arcane-league-of-legends/1366_2000.jpeg',
        rating: 4,
        reviewCount: 54


    },
    {
        id: 2,
        title: 'LightYear',
        description: 'Buena pelicula',
        img: 'https://www.prensario.net/Multimedios/imgs/50253_750.jpg',
        rating: 3.6,
        reviewCount: 20
    },
    {
        id: 3,
        title: 'Guardianes de la galaxia',
        description: 'una peli mas de superheroe',
        img: 'https://es.web.img3.acsta.net/newsv7/22/01/29/15/21/4874804.jpg',
        rating: 2,
        reviewCount: 12
    }
]

const Arcane = {
    title: 'Arcane',
    description: 'Arcane es una buena serie',
    img: 'https://i.blogs.es/79f36c/portada-analisis-trailer-arcane-league-of-legends/1366_2000.jpeg',
    rating: 4,
    reviewCount: 54
}

const BannerTop = () => {



  return (
    <>
        <Box display={'flex'} bg='green.300' w='100%' h={'320px'} p={4} color='white'>
            
            {movies.map(e=> <Box display={'flex'} px='5px'>
                <Box mx={'3px'}>
                <Circle size='40px' bg='tomato' color='white'>
                    {e.rating}
                </Circle>
                </Box>
            
            <HStack spacing='24px'>
                <Box borderRadius='lg' w='230px' h='280px' bg='yellow.200'>
                    <Image h='55%' borderTopRadius={'lg'} src={e.img} alt={''} />

                    <Box h='25%'>
                        <Heading as='h3' size='lg'>
                            {e.title}
                        </Heading>
                    </Box>

                    <Box display={'flex'} justifyContent='space-evenly' w={'100%'}>
                        
                        <Stack direction={'row'} spacing='5px' p={2} w='100%'>
                            <Box display={'flex'} alignItems='center'  w='60%' h='40px' bg='blue.300' fontSize={'xs'}>
                                {e.reviewCount} Votos

                            {Array(5)
                                .fill('')
                                .map((_, i) => (
                                <StarIcon
                                    key={i}
                                    color={i < e.rating ? 'teal.500' : 'gray.300'}
                                />
                                ))}
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
            )        
}
        </Box>

    </>
  )
}

export default BannerTop