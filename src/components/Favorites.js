import React from 'react'
import { Box, Button, HStack, Image, Heading, Stack, Center, Divider } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import { deleMovie } from './reducers'
import {Link} from 'react-router-dom'

const Favorites = () => {

    const dispatch = useDispatch()
    const movieList = useSelector((state)=> state.favorites.value)
    const theme = useSelector((state)=> state.theme.value)
  return (
    <> 

        <Center  bg={theme? 'blue.50' : 'gray.800'} w='100%' p={2} color='white'>
            <Heading fontFamily={'sans-serif'} fontSize={{base: '3xl', md: '5xl'}} p={2} color={theme? 'blue.600' : 'linkedin.500'} >
                Favoritas
            </Heading>
        </Center>
        <Box display={'flex'}  w='100%' h={{base: '300px',  md: '400px'}} p={4} color={theme ? 'blue.600' : 'white'} bg={theme ? 'white' : 'gray.700'} overflowX={'auto'}>
        {
            movieList.length == 0 

            ?
            
            <Center w={'100%'}>
                <Heading textAlign={'center'}> Agrega tus peliculas favoritas</Heading>
            </Center>
            :

            movieList.map(e=>
                <Box display={'flex'} px='5px'>
            
            <HStack spacing='24px'>
                <Box borderRadius='lg' w={{base: '200px', md:'230px'}} h={{base: '250px', md: '280px'}} bg={theme? 'white' : 'gray.800'} margin={4} boxShadow='base'>
                    <Image h='55%' w={'100%'} borderTopRadius={'lg'} src={e.img} alt={e.title} />

                    <Box h='25%'>
                        <Heading color={theme ? 'blue.600' : 'white'} p={3} fontSize={{base: 'xl', md: '2xl'}}>
                            {e.title}
                        </Heading>
                    </Box>

                    <Box>                
                        <HStack direction={'row'} spacing='5px' p={2} w='100%'>
                            <Box >
                                <Link to={`/info/${e.id}`}>
                                    <Button  position={'static'} fontSize={{base: 'xs', md: 'md'}} colorScheme='blue' variant={theme ? 'outline' : 'solid'}>Información</Button>
                                </Link>
                            </Box>
                            <Box >
                                <Button position={'static'} fontSize={{base: 'xs', md: 'md'}} colorScheme='blue' variant={theme ? 'outline' : 'solid'} onClick={()=> {dispatch(deleMovie({ id: e.id}))}}>Borrar</Button>
                            </Box>
                        </HStack>
                    </Box>

                </Box>

                
            </HStack>



            </Box>
               
              )
          }
            </Box>
          <Divider/>

    </>
  )
}

export default Favorites