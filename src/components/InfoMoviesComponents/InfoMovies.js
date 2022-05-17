import React, {useState} from 'react'
import {Box, Stack, Image, Heading, Text, Link, Button, FormControl, FormLabel, Input} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { addText } from '../reducers/TextBox'


const InfoMovies = ({title, age, rating, category, img, description, id, type, platform, trailer}) => {

  const textBox = useSelector((state)=> state.text.value)
  const theme = useSelector((state)=> state.theme.value)
  const dispatch = useDispatch()

  const [Texto, setTexto] = useState('')

  const enviar = ()=>{

    if(Texto.length < 40 && Texto.length != " "){
    dispatch(addText({id: id, coment: Texto}))
    setTexto('')}
  }
  

  const filtro = textBox.filter(e=> e.id === id)

  return (
    <>
    <Box bg={theme ? 'white' : 'gray.700'}h={{base: '1520px', md: '1100px'}} w={'auto'} >

        <Box  w='100%' h={{base: '1500px', md: '600px'}} p={4} color='white'>
            <Stack direction={{base: 'column', md: 'row'}} spacing='24px' h={'100%'} w={'100%'}>
            <Box borderRadius={'lg'} w={{base: '100%', md: '50%'}} h={{base: '33%', md: '100%'}} >
                <Image borderRadius={'lg'} h={'100%'} w={'100%'} src={img}/>
            </Box>

            <Box p={'2%'} borderRadius={'lg'} w={{base: '100%', md: '50%'}} h={{base: '33%', md: '100%'}} bg={theme ? 'blue.50' : 'gray.600'}  color={theme ? 'blue.600' : 'linkedin.500'}>
                <Box textAlign={'center'} w={'100%'} h={'10%'}>
                  <Heading fontFamily={'sans-serif'} fontWeight={'bold'}>{title}</Heading>
                </Box>

                <Box borderRadius={'lg'} w={'100%'}  h={'90%'} bg={ theme ? 'white' : 'gray.100'} color={theme ? 'blue.600' : 'blue.700'} fontSize={{base: 'sm'}} p={2}>
                    <Text fontWeight={'bold'} mb={1}> Descripción: </Text>
                    <Text fontSize={{base: 'xs', sm: 'sm'}}>{description}</Text>
                    <Text fontWeight={'bold'}  mb={1}>Lanzamiento: </Text>
                    <Text> {age}</Text>
                    <Text fontWeight={'bold'}  mb={1}> Puntaje: </Text>
                    <Text>{rating}</Text>
                    <Text fontWeight={'bold'}  mb={1}>Categoria:</Text>
                    <Text > {category.charAt(0).toUpperCase() + category.slice(1)}</Text>
                    <Text fontWeight={'bold'}  mb={1}> Tipo:</Text>
                    <Text>  {type}</Text>
                    <Text fontWeight={'bold'}   mb={1}>Plataforma :  </Text>
                    <Text> {platform}</Text>
                    <Text fontWeight={'bold'}  mb={1}> Trailer:  </Text>
                    <Link href={trailer} isExternal> <Button size={'sm'} position={'static'}  colorScheme='blue' variant={theme ? 'outline' : 'solid'}> Trailer </Button> </Link>
                </Box>

            </Box>

            <Box borderRadius={'lg'} w={{base: '100%', md: '50%'}} h={{base: 'auto', md: '100%'}} display={{ md: 'none'}}>
              
              <Box borderRadius={'lg'} p={2} bg={theme ? 'gray.100' : 'gray.200'} >
                <FormControl position={'static'} >
                    <FormLabel ml={1} color={'black'}> Ingresa un comentario: </FormLabel>
                      <Input onKeyDown={(e)=> {if(e.code === 'Enter'){enviar()}}} onChange={(e)=> setTexto(e.target.value)} position={'static'} value={Texto} placeholder='Deja un comentario...' type='text' color={'black'} bg={'white'} />
                      {Texto.length >= 40 ? <Text color={'red.500'} fontSize={'sm'}> Solo 40 caracteres </Text> : ''}
                  <Button onClick={ enviar } type='submit' position={'static'}  mt={2} colorScheme='blue'>Enviar</Button>
                </FormControl>

                <Box mt={3} overflowY={'auto'} h={'300px'}>

                    
                    {filtro.map(e=> 
                      <Box bg={theme ? 'gray.50' : 'gray.100'} h={'100px'} borderWidth='1px' borderRadius='lg' border='1px' mb={2} color={'black'} p={2}>
                      <Text fontWeight={'bold'} color={theme ? 'blue.600' : 'blue.700'} >Anonimo: </Text>
                      <Text color={'black'} fontSize={{base: 'sm', sm: 'md'}} >
                        {e.coment}
                      </Text>
                      <Text mt={2} fontSize={{base: 'xs'}}>{new Date().toLocaleDateString()}</Text>
                    
                    </Box>)}

                </Box>

              </Box>

            </Box>

          </Stack>

      {/* Esta es la parte grade del form con el box de texto */}
      
          <Box borderRadius={'lg'} mt={'20px'} w={{base: '100%'}} h={{base: '450px'}} display={{base: 'none', md: 'flex'}} >
              
              <Box borderRadius={'lg'} w={'100%'} h={'100%'} p={2} bg={theme ? 'blue.50' : 'gray.200'}  >
                <FormControl p={1}  position={'static'}>
                    <FormLabel ml={1} color={'black'}> Ingresa un comentario: </FormLabel>
                    <Input onKeyDown={(e)=> {if(e.code === 'Enter'){enviar()}}} onChange={(e)=> setTexto(e.target.value)} position={'static'} value={Texto} placeholder='Deja un comentario...' type='text' color={'black'} bg={'white'} />
                      {Texto.length >= 40 ? <Text color={'red.500'} fontSize={'sm'}> Solo 40 caracteres </Text> : ''}
                  <Button onClick={ enviar } type='submit' position={'static'}   mt={2} colorScheme='blue' variant={theme ? 'outline' : 'solid'}>Enviar</Button>
                </FormControl>

                <Box p={1} mt={3} overflowY={'auto'} h={'300px'}>
                    
                  {filtro.map(e=> 
                      <Box bg={theme ? 'gray.50' : 'gray.100'} h={'100px'} borderWidth='1px' borderRadius='lg' border='1px' mb={2} color={'black'} p={2}>
                      <Text fontWeight={'bold'} color={theme ? 'blue.600' : 'blue.700'}>Anonimo: </Text>
                      <Text color={'black'} fontSize={'xl'} >
                        {e.coment}
                      </Text>
                      <Text mt={2} fontSize={{base: 'sm'}}>{new Date().toLocaleDateString()}</Text>
                    
                    </Box>)}

                </Box>

              </Box>

          </Box>

          
          
        </Box>


        </Box>

    </>
  )
}

export default InfoMovies