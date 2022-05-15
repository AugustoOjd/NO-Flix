import React from 'react'
import {Box, Heading, IconButton, Image, Button, Text} from '@chakra-ui/react'
import RatingContainer from '../allMovieComponents/RatingContainer'
import {AddIcon, CheckIcon} from '@chakra-ui/icons'
import { addMovie } from '../reducers'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

const StylesFiltro = ({title, img, rating, reviewCount, age, id}) => {


    const validate = useSelector((state)=> state.favorites.value.find(e=> e.id == id))
    const dispatch = useDispatch()
    const theme = useSelector((state)=> state.theme.value)

  return (
    <>
        <Box >
        <Box borderRadius='lg' w={{base: '200px', md:'230px'}} h={{base: '250px', md: '280px'}} bg={theme ? 'white' : 'gray.700'} margin={4} boxShadow='base'>

                    <Image h='55%' w={'100%'} borderTopRadius={'lg'} src={img} alt={''} />


                    <Box h='25%'>
                        <Heading color={theme ? 'blue.600' : 'white'} p={3} fontSize={{base: 'xl', md: '2xl'}}>
                            {title}
                        </Heading>
                    </Box>

                    <Box w={'100%'} >
                        
                        <Box display={'flex'} justifyContent={'space-around'} p={1} w='100%'>
                            <Box display={'flex'} alignItems='center'  w={{base: '50%'}} h='40px' fontSize={'xs'} mr={1}>
                                <Text mr={2} fontWeight={'semibold'} fontSize={{base: 'xs', md: 'md'}} color={theme ? 'blue.600' : 'white'}> {reviewCount}</Text>


                            <RatingContainer rating={rating}/>

                            </Box>
                            <Box mr={1} display={'flex'} alignItems='center'h='40px' fontSize={'xs'}>
                                <IconButton
                                    onClick={()=> dispatch(addMovie({title: title, id: id, rating: rating, img: img}))}
                                    position={'static'}
                                    colorScheme={validate ? 'green' : 'blue'}
                                    aria-label='Search database'
                                    icon={ validate ? <CheckIcon/> : <AddIcon />}
                                    variant={theme ? 'outline' : 'solid'}
                                    />
                            </Box>
                            <Box display={'flex'} alignItems='center'  h='40px' >
                                <Link to={`/info/${id}`}>
                                    <Button  position={'static'} fontSize={{base: 'xs', md: 'md'}} colorScheme='blue' variant={theme ? 'outline' : 'solid'}>Info</Button>
                                </Link>
                            </Box>
                        </Box>
                    </Box>

                </Box>
        </Box>
    </>
  )
}

export default StylesFiltro