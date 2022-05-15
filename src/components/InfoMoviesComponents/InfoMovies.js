import React, {useState} from 'react'
import {Box, Stack, Image, Heading, Text, Center, Button, FormControl, FormLabel, Input} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { addText } from '../reducers/TextBox'


const InfoMovies = ({title, age, rating, category, img, coment, id}) => {

  const textBox = useSelector((state)=> state.text.value)
  const dispatch = useDispatch()

  const [Texto, setTexto] = useState('')
  console.log(textBox)

  const enviar = ()=>{

    if(Texto.length < 60 && Texto.length != " "){
    dispatch(addText({id: id, coment: Texto}))
    setTexto('')}
  }

  const filtro = textBox.filter(e=> e.id === id)

  return (
    <>
    <Box bg='blue.300' h={{base: '1520px', md: '1100px'}} w={'auto'}>

        <Box  w='100%' h={{base: '1500px', md: '600px'}} p={4} color='white'>
            <Stack direction={{base: 'column', md: 'row'}} spacing='24px' h={'100%'} w={'100%'}>
            <Box w={{base: '100%', md: '50%'}} h={{base: '33%', md: '100%'}} bg='yellow.200' >
                <Image h={'100%'} w={'100%'} src={img}/>
            </Box>

            <Box w={{base: '100%', md: '50%'}} h={{base: '33%', md: '100%'}} bg='tomato'>
                <Center>
                    <Heading>{title}</Heading>
                    <Text>{age}</Text>
                    <Text>{rating}</Text>
                    <Text>{category}</Text>
                </Center>
            </Box>

            <Box w={{base: '100%', md: '50%'}} h={{base: 'auto', md: '100%'}} bg='gray.200' display={{ md: 'none'}}>
              
              <Box p={2} bg={'white'} >
                <FormControl position={'static'} >
                    <FormLabel color={'black'}> Ingresa un comentario: </FormLabel>
                      <Input onChange={(e)=> setTexto(e.target.value)} position={'static'} value={Texto} placeholder='Deja un comentario...' type='text' color={'black'} />
                      {Texto.length >= 60 ? <Text color={'red.500'}> Solo 60 caracteres </Text> : ''}
                  <Button onClick={ enviar } type='submit' position={'static'}  m={1} colorScheme='blue'>Enviar</Button>
                </FormControl>

                <Box mt={3} overflowY={'auto'} h={'300px'}>

                    
                    {filtro.map(e=> 
                      <Box bg={'blue.100'} h={'100px'} borderWidth='1px' borderRadius='lg' border='1px' mb={2} color={'black'}>
                      <Text color={'black'}>Anonimo: </Text>
                      <Text color={'black'} fontSize={'md'} >
                        {e.coment}
                      </Text>
                      <Text>{new Date().toLocaleDateString()}</Text>
                    
                    </Box>)}

                </Box>

              </Box>

            </Box>

          </Stack>

      {/* Esta es la parte grade del form con el box de texto */}
      
          <Box mt={'20px'} w={{base: '100%'}} h={{base: '450px'}} bg='gray.200' display={{base: 'none', md: 'flex'}} >
              
              <Box w={'100%'} h={'100%'} p={2} bg={'white'}  >
                <FormControl p={1}  position={'static'}>
                    <FormLabel color={'black'}> Ingresa un comentario: </FormLabel>
                    <Input onChange={(e)=> setTexto(e.target.value)} position={'static'} value={Texto} placeholder='Deja un comentario...' type='text' color={'black'} />
                      {Texto.length >= 60 ? <Text color={'red.500'}> Solo 60 caracteres </Text> : ''}
                  <Button onClick={ enviar } type='submit' position={'static'}   m={1} colorScheme='blue'>Enviar</Button>
                </FormControl>

                <Box p={1} mt={3} overflowY={'auto'} h={'300px'}>
                    
                  {filtro.map(e=> 
                      <Box bg={'blue.100'} h={'100px'} borderWidth='1px' borderRadius='lg' border='1px' mb={2} color={'black'}>
                      <Text color={'black'}>Anonimo: </Text>
                      <Text color={'black'} fontSize={'md'} >
                        {e.coment}
                      </Text>
                      <Text>{new Date().toLocaleDateString()}</Text>
                    
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