import React from 'react'
import {Box, Stack, Image, Heading, Button, IconButton, Text} from '@chakra-ui/react'
import RatingContainer from './RatingContainer'
import {AddIcon, CheckIcon} from '@chakra-ui/icons'
import { addMovie } from '../reducers'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const MoviesContainer = ({title, img, rating, reviewCount, id}) => {

const validate = useSelector((state)=> state.favorites.value.find(e=> e.id == id))
const dispatch = useDispatch()

// console.log('esto es validate', validate)
  return (
    <>
                <Box borderRadius='lg' w='250px' h='280px' bg='yellow.200' margin={4}>
                    

                    <Image h='55%' w={'100%'} borderTopRadius={'lg'} src={img} alt={''} >

                    </Image>

                    <Box h='25%'>
                        <Heading as='h3' size='lg'>
                            {title}
                        </Heading>
                    </Box>

                    <Box display={'flex'} justifyContent='space-evenly' w={'100%'}>
                        
                        <Stack direction={'row'} spacing='5px' p={2} w='100%'>
                            <Box display={'flex'} alignItems='center'  w='60%' h='40px' bg='blue.300' >
                                <Text mr={1} fontSize={'xs'}>{reviewCount} Votos</Text>


                                <RatingContainer rating={rating}/>

                            </Box>
                            <Box display={'flex'} alignItems='center' w='20%' h='40px' bg='red.400' >
                                <IconButton fontSize={'md'}
                                    onClick={()=> dispatch(addMovie({title: title, id: id, rating: rating, img: img}))}
                                    position={'static'}
                                    colorScheme={validate ? 'green' : 'blue'}
                                    aria-label='Search database'
                                    icon={ validate ? <CheckIcon/> : <AddIcon />}
                                    />
                            </Box>
                            <Box display={'flex'} alignItems='center' h='40px' bg='pink.400'>
                                <Link  to={`/info/${id}`}>
                                    <Button position={'static'} fontSize='xs' colorScheme='blue'>Info</Button>
                                </Link>
                            </Box>
                        </Stack>
                    </Box>

                </Box>
    </>
  )
}

export default MoviesContainer