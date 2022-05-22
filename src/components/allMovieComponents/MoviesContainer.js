import React, {useState} from 'react'
import {Box, Stack, Image, Heading, Button, IconButton, Text, Modal, ModalOverlay, ModalContent, ModalHeader, Divider, Circle, Radio, FormControl, FormLabel, ModalCloseButton, ModalBody, RadioGroup, ModalFooter} from '@chakra-ui/react'
import RatingContainer from './RatingContainer'
import {AddIcon, CheckIcon} from '@chakra-ui/icons'
import { addMovie } from '../reducers'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useDisclosure } from '@chakra-ui/react'
import { votar } from '../reducers/Votacion'

const MoviesContainer = ({title, img, rating, reviewCount, id, votos}) => {

const validate = useSelector((state)=> state.favorites.value.find(e=> e.id == id))
const dispatch = useDispatch()
const theme = useSelector((state)=> state.theme.value)

const { isOpen, onOpen, onClose } = useDisclosure()
const [Puntos, setPuntos] = useState()

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
                            {/* <Box display={'flex'} alignItems='center'  >
                                <Button size={'sm'} fontSize={'xs'} position={'static'} colorScheme='blue' variant={theme ? 'outline' : 'solid'}>
                                    Votar
                                </Button>
                            </Box> */}

                            <Box display={'flex'} alignItems='center' w='20%' >
                                <Button onClick={onOpen} size={'sm'} fontSize={'xs'} position={'static'} colorScheme='blue' variant={theme ? 'outline' : 'solid'}>Votar</Button>
                            </Box>

                            <Modal  isOpen={isOpen} onClose={onClose}>
                                <ModalOverlay />
                                    <ModalContent bg={theme ? 'white' : 'gray.900'}>
                                        <ModalHeader textAlign={'center'} fontWeight={'bold'} fontFamily={'sans-serif'} color={theme? 'blue.600' : 'white'}>{title}</ModalHeader>
                                        <Divider/>
                                        <ModalCloseButton bg={theme ? 'gray.100' : 'gray.600'} color={theme ? 'blue.600' : 'white'} variant={theme? 'outline' : 'solid'} />
                                        
                                        <ModalBody>
                                        <FormControl as='fieldset'>
                                            <FormLabel color={theme? 'blue.600' : 'white'} as='legend'>{`Valora: ${title}`}  </FormLabel>
                                            <RadioGroup >
                                                <Box display={'flex'} justifyContent={'space-around'}>
                                                <Radio size={'lg'}  value='1' onChange={(e)=> setPuntos(e.target.value)}>  
                                                    <Circle size='30px' bg={theme ? 'blue.600' : 'linkedin.500'} color='white'>
                                                        1
                                                    </Circle>
                                                </Radio>
                                                <Radio size={'lg'}  value='2' onChange={(e)=> setPuntos(e.target.value)}>
                                                    <Circle size='30px' bg={theme ? 'blue.600' : 'linkedin.500'} color='white'>
                                                        2
                                                    </Circle>
                                                </Radio>
                                                <Radio size={'lg'}  value='3' onChange={(e)=> setPuntos(e.target.value)}>
                                                    <Circle size='30px' bg={theme ? 'blue.600' : 'linkedin.500'} color='white'>
                                                        3
                                                    </Circle>
                                                </Radio>
                                                <Radio size={'lg'}  value='4' onChange={(e)=> setPuntos(e.target.value)}>
                                                    <Circle size='30px' bg={theme ? 'blue.600' : 'linkedin.500'} color='white'>
                                                        4
                                                    </Circle>
                                                </Radio>
                                                <Radio size={'lg'}  value='5' onChange={(e)=> setPuntos(e.target.value)}>
                                                    <Circle size='30px' bg={theme ? 'blue.600' : 'linkedin.500'} color='white'>
                                                        5
                                                    </Circle>
                                                </Radio>
                                                </Box>
                                            </RadioGroup>
                                            <Button onClick={()=> console.log(dispatch(votar( {id, reviewCount, votos: votos.concat(parseInt(Puntos)), rating: parseInt(((votos.reduce((acc, current)=> acc + current, 0))/votos.length).toFixed(1)) } )))} mt={3} colorScheme={'blue'} variant={theme ? 'outline' : 'solid'}>Votar</Button>
                                            </FormControl>
                                        </ModalBody>
                                        <Divider/>
                                        <ModalFooter>
                                            <Button colorScheme='blue' variant={theme ? 'outline' : 'solid'} mr={3} onClick={onClose}>
                                                Close
                                            </Button>
                                            
                                    </ModalFooter>
                                </ModalContent>
                            </Modal>


                            <Box display={'flex'} alignItems='center'  h='40px' >
                                <IconButton
                                    size={'sm'}
                                    fontSize={'sm'}
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
                                    <Button size={'sm'} position={'static'} fontSize={{base: 'xs', md: 'sm'}} colorScheme='blue' variant={theme ? 'outline' : 'solid'}>Info</Button>
                                </Link>
                            </Box>
                        </Stack>
                    </Box>

                </Box>
    </>
  )
}

export default MoviesContainer