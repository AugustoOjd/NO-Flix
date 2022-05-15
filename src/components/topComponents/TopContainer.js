import React from 'react'
import { HStack, Box, Image, Heading, Stack, Button, Circle } from '@chakra-ui/react'
import RatingContainer from '../allMovieComponents/RatingContainer'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

const TopContainer = ({title, img, rating, reviewCount, id}) => {

    const theme = useSelector((state)=> state.theme.value)

  return (
    <>
        <Box display={'flex'} px='5px'>
                <Box mx={'3px'}>
                <Circle fontWeight={'semibold'} size={{base: '30px', md: '40px'}} bg={theme ? 'blue.600' : 'linkedin.500'} color='white'>
                    {rating}
                </Circle>
                </Box>
            
            <HStack spacing='24px'>
                <Box borderRadius='lg' w={{base: '190px'}} h={{base: '230px'}} bg={theme ? 'white' : 'gray.700'} boxShadow='base'>
                    <Image h='55%' w={'100%'} borderTopRadius={'lg'} src={img} alt={''} />

                    <Box h='25%'>
                        <Heading color={theme ? 'blue.600' : 'white'} p={2} fontSize={{base: 'auto', sm: 'lg'}}>
                            {title}
                        </Heading>
                    </Box>

                    <Box display={'flex'}  w={'100%'} h={'20%'}>
                        
                        <Box display={'flex'} justifyContent='space-between' alignItems={'center'} direction={'row'}  p={2} w='100%'>
                            <Box letterSpacing={1} color={theme ? 'black' : 'white'} display={'flex'} alignItems='center'  w='40%' h='40px' fontSize={{base: 'sm', sm: 'md'}}>
                                {reviewCount}
                            
                            <RatingContainer rating={rating}/>
                            </Box>

                            <Box display={'flex'} alignItems='center' w='20%' >
                                <Button fontSize={'xs'} position={'static'} colorScheme='blue' variant={theme ? 'outline' : 'solid'}>Votar</Button>
                            </Box>

                            <Box display={'flex'} alignItems='center' w={{base: '20%'}}>
                                
                                    <Button fontSize='xs'  position={'static'} colorScheme='blue' variant={theme ? 'outline' : 'solid'}>
                                        <Link  w='20%' to={`/info/${id}`}>
                                            Info
                                        </Link>
                                    </Button>
                                
                            </Box>
                        </Box>
                    </Box>

                </Box>
            </HStack>
            </Box>
    </>
  )
}

export default TopContainer