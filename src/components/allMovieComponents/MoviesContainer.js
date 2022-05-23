import React from 'react'
import {Box, Stack, Image, Heading, Button, IconButton, Text} from '@chakra-ui/react'
import RatingContainer from './RatingContainer'
import {AddIcon, CheckIcon} from '@chakra-ui/icons'
import { addMovie } from '../reducers'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const MoviesContainer = ({title, img, rating, reviewCount, id, votos}) => {

const validate = useSelector((state)=> state.favorites.value.find(e=> e.id == id))
const dispatch = useDispatch()
const theme = useSelector((state)=> state.theme.value)


// console.log('esto es validate', validate)
  return (
    <>
                <Box borderRadius='lg' w='250px' h='280px' bg={theme ? 'white' : 'gray.900'} margin={4} boxShadow='base'>
                    

                    <Image h='55%' w={'100%'} borderTopRadius={'lg'} src={img} alt={''} >

                    </Image>

                    <Box h='25%'>
                        <Heading color={theme ? 'blue.600' : 'white'} p={3} fontSize={{base: 'xl', md: '2xl'}}>
                            {title}
                        </Heading>
                    </Box>
                    
                    <Box display={'flex'} justifyContent='space-evenly' w={'100%'}>
                        
                        <Stack direction={'row'} spacing='5px' p={2} w='100%'>
                            <Box ml={1} display={'flex'} alignItems='center'   h='40px' >
                                <Text mr={1} fontWeight={'semibold'} fontSize={{base: 'xs', md: 'md'}} color={theme ? 'blue.600' : 'white'}>{reviewCount}</Text>


                                <RatingContainer rating={rating}/>

                            </Box>

                            <Box display={'flex'} alignItems='center'  h='40px' >
                                <IconButton
                                    size={'md'}
                                    fontSize={'md'}
                                    onClick={()=> dispatch(addMovie({title: title, id: id, rating: rating, img: img}))}
                                    position={'static'}
                                    colorScheme={validate ? 'green' : 'blue'}
                                    aria-label='Search database'
                                    variant={theme ? 'outline' : 'solid'}
                                    icon={ validate ? <CheckIcon/> : <AddIcon />}
                                    />
                            </Box>
                            <Box display={'flex'} alignItems='center' h='40px'>
                                <Link  to={`/info/${id}`}>
                                    <Button size={'md'} position={'static'} fontSize={{base: 'sm', md: 'md'}} colorScheme='blue' variant={theme ? 'outline' : 'solid'}>Info</Button>
                                </Link>
                            </Box>
                        </Stack>
                    </Box>

                </Box>
    </>
  )
}

export default MoviesContainer