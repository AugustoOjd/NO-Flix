import React from 'react'
import { HStack, Button } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'


const Links = () => {
  return (
    <>
        <HStack spacing='25px'>

        <Button colorScheme='white' variant='link' size={'lg'}>
            <NavLink to={'/'}>Inicio</NavLink>
        </Button>


        <Button colorScheme='white' variant='link' size={'lg'}>
            Accion
        </Button>


        <Button colorScheme='white' variant='link' size={'lg'}> 
            <NavLink to={'/terror'}> Terror </NavLink>
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