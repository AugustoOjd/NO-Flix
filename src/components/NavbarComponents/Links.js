import React from 'react'
import { HStack, Button } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'



const Links = () => {
    const dark = useSelector((state)=> state.theme.value)
    
  return (
    <>
        <HStack spacing='25px'>

        <Button colorScheme='white' variant='link' size={'lg'}>
            <NavLink to={'/'}>
                Inicio
            </NavLink>
        </Button>


        <Button colorScheme='white' variant='link' size={'lg'}>
            <NavLink to={'/accion'}>
                Accion
            </NavLink>

        </Button>

        <Button colorScheme='white' variant='link' size={'lg'}> 
            <NavLink to={'/terror'}> 
                Terror 
            </NavLink>
        </Button>         


        <Button colorScheme='white' variant='link' size={'lg'}>
            <NavLink to={'/animadas'}>
                Animadas
            </NavLink>  
        </Button>

        <Button colorScheme='white' variant='link' size={'lg'}>
            <NavLink to={'/favoritas'}>
                Favoritas +
            </NavLink>
        </Button>

        </HStack>
    </>
  )
}

export default Links