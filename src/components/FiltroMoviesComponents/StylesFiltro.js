import React from 'react'
import {Box, Heading, IconButton, Stack, Image, Button} from '@chakra-ui/react'
import RatingContainer from '../allMovieComponents/RatingContainer'
import {AddIcon, CheckIcon} from '@chakra-ui/icons'
import { addMovie } from '../reducers'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

const StylesFiltro = ({title, img, rating, reviewCount, age, id}) => {


    const validate = useSelector((state)=> state.favorites.value.find(e=> e.id == id))
    const dispatch = useDispatch()

  return (
    <>
        <Box >
        <Box borderRadius='lg' w='230px' h='280px' bg='yellow.200' margin={4}>
                    
                    {/* <Box position={'absolute'}>

                    </Box> */}


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
                                <IconButton
                                    onClick={()=> dispatch(addMovie({title: title, id: id, rating: rating, img: img}))}
                                    position={'static'}
                                    colorScheme={validate ? 'green' : 'blue'}
                                    aria-label='Search database'
                                    icon={ validate ? <CheckIcon/> : <AddIcon />}
                                    />
                            </Box>
                            <Box display={'flex'} alignItems='center' fontSize='xs' w='20%' h='40px' bg='pink.400'>
                            <Link to={`/info/${id}`}>
                                <Button position={'static'} colorScheme='blue'>Info</Button>
                            </Link>
                            </Box>
                        </Stack>
                    </Box>

                </Box>
        </Box>
    </>
  )
}

export default StylesFiltro