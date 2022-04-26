import React from 'react'
import { HStack, Box, Image, Heading, Stack, Button } from '@chakra-ui/react'
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
        img: 'https://pics.filmaffinity.com/Lightyear-654887286-large.jpg',
        rating: 3.6,
        reviewCount: 54
    },
    {
        id: 3,
        title: 'Guardianes de la galaxia',
        description: 'una peli mas de superheroe',
        img: 'https://pics.filmaffinity.com/Guardianes_de_la_galaxia-595487268-large.jpg',
        rating: 4.2,
        reviewCount: 54
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
        <Box bg='green.300' w='100%' h={'320px'} p={4} color='white'>
            <HStack spacing='24px'>
                <Box borderRadius='lg' w='230px' h='280px' bg='yellow.200'>
                    <Image h='55%' borderTopRadius={'lg'} src={'https://i.blogs.es/79f36c/portada-analisis-trailer-arcane-league-of-legends/1366_2000.jpeg'} alt={''} />

                    <Box h='25%'>
                        <Heading as='h3' size='lg'>
                            Titulo movie
                        </Heading>
                    </Box>

                    <Box display={'flex'} justifyContent='space-evenly' w={'100%'}>
                        
                        <Stack direction={'row'} spacing='5px' p={2} w='100%'>
                            <Box display={'flex'} alignItems='center'  w='60%' h='40px' bg='blue.300' fontSize={'xs'}>
                                {Arcane.reviewCount} Votos

                            {Array(5)
                                .fill('')
                                .map((_, i) => (
                                <StarIcon
                                    key={i}
                                    color={i < Arcane.rating ? 'teal.500' : 'gray.300'}
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

    </>
  )
}

export default BannerTop