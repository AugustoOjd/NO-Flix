import React from 'react'
import { HStack, Box, Button } from '@chakra-ui/react'

const Links = () => {
  return (
    <>
        <HStack spacing='25px'>

        <Button colorScheme='white' variant='link' size={'lg'}>
            Inicio
        </Button>


        <Button colorScheme='white' variant='link' size={'lg'}>
            Accion
        </Button>


        <Button colorScheme='white' variant='link' size={'lg'}>
            Terror
        </Button>         


        <Button colorScheme='white' variant='link' size={'lg'}>
            Animadas
        </Button>

        <Button colorScheme='white' variant='link' size={'lg'}>
            Top 10
        </Button>

        </HStack>
    </>
  )
}

export default Links