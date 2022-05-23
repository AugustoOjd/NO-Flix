import React, {useState, useEffect} from 'react'
import { HStack, Box, Image, Heading, Text, Button, Circle, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, FormControl, FormLabel, RadioGroup, Radio, Divider } from '@chakra-ui/react'
import RatingContainer from '../allMovieComponents/RatingContainer'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useDisclosure } from '@chakra-ui/react'
import { votar } from '../reducers/Votacion'
// import {AlertIcon} from '@chakra-ui/icons'

const TopContainer = ({title, img, rating, reviewCount, id, votos}) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const theme = useSelector((state)=> state.theme.value)
    const dispatch = useDispatch()
    const [Puntos, setPuntos] = useState()

    useEffect(() => {

    }, [])
    

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
                            <Box letterSpacing={1} color={theme ? 'blue.600' : 'white'} display={'flex'} alignItems='center'  w='40%' h='40px' fontSize={{base: 'sm', sm: 'md'}}>
                                <Text mr={1}>
                                {reviewCount}
                                </Text>
                            
                            <RatingContainer rating={rating}/>
                            </Box>

                            <Box display={'flex'} alignItems='center' w='20%' >
                                <Button onClick={onOpen} fontSize={'xs'} position={'static'} colorScheme='blue' variant={theme ? 'outline' : 'solid'}>Votar</Button>
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
                                            <Button  onClick={()=> onClose(dispatch(votar( {id, reviewCount, votos: votos.concat(parseInt(Puntos)), rating: parseFloat(((votos.reduce((acc, current)=> acc + current, 0))/votos.length).toFixed(1)) } )))} mt={3} colorScheme={'blue'} variant={theme ? 'outline' : 'solid'}>Votar</Button>
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