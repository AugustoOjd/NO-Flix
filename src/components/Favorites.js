import React from 'react'
import { Box, Button, HStack, Image, Heading, Stack } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import { deleMovie } from './reducers'

const Favorites = () => {

    const dispatch = useDispatch()
    const movieList = useSelector((state)=> state.favorites.value)
  return (
    <> 

        <Box bg='gray.800' w='100%' h='500px'p={4} color='white'>
            <Heading textAlign={'center'}> Favoritas</Heading>
        <Box display={'flex'} bg='gray.800' w='100%' h='500px'p={4} color='white' overflowX={'auto'}>
        {
            movieList.map(e=>
                <Box display={'flex'} px='5px'>
            
            <HStack spacing='24px'>
                <Box borderRadius='lg' w='230px' h='280px' bg='yellow.200'>
                    <Image h='55%' w={'100%'} borderTopRadius={'lg'} src={e.img} alt={''} />

                    <Box h='25%'>
                        <Heading as='h3' size='lg'>
                            {e.title}
                        </Heading>
                    </Box>

                    <Box>                
                        <HStack direction={'row'} spacing='5px' p={2} w='100%'>
                            <Box >
                                <Button  position={'static'} colorScheme='blue'>Informacion</Button>
                            </Box>
                            <Box >
                                <Button position={'static'} onClick={()=> {dispatch(deleMovie({ id: e.id}))}} bg={'blue.500'}>delete</Button>
                            </Box>
                        </HStack>
                    </Box>

                </Box>
            </HStack>



            </Box>
               
              )
          }
            </Box>
        </Box>

    </>
  )
}

export default Favorites