import React from 'react'
import { HStack, Button, IconButton } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {BsHouseDoorFill, BsJournalPlus} from 'react-icons/bs'
import {GiBolterGun, GiTerror} from 'react-icons/gi'
import{ SiHappycow} from 'react-icons/si'



const Links = () => {

    const dark = useSelector((state)=> state.theme.value)
    
  return (
    <>
        <HStack  spacing={{base: '6px', sm: '20px', md: '25px'}}>

{/* INICIO */}
        <Button display={{base: 'none', md: 'flex'}} colorScheme={dark ? 'linkedin' : 'white'} variant='link' size={'lg'}>
            <NavLink to={'/'}>
                Inicio
            </NavLink>
        </Button>
        

        <Button size={'sm'} display={{base: 'flex', md: 'none'}} colorScheme={dark ? 'linkedin' : 'white'} variant='outline'>
            <NavLink to={'/'}>
                <BsHouseDoorFill/>
            </NavLink>
        </Button>

{/* ACCION */}
        <Button display={{base: 'none', md: 'flex'}} colorScheme={dark ? 'linkedin' : 'white'} variant='link' size={'lg'}>
            <NavLink to={'/accion'}>
                Accion
            </NavLink>

        </Button>

        <Button size={'sm'} display={{base: 'flex', md: 'none'}}colorScheme={dark ? 'linkedin' : 'white'} variant='outline'>
            <NavLink to={'/accion'}>
                <GiBolterGun/>
            </NavLink>
        </Button>

{/* TERROR */}

        <Button display={{base: 'none', md: 'flex'}} colorScheme={dark ? 'linkedin' : 'white'} variant='link' size={'lg'}> 
            <NavLink to={'/terror'}> 
                Terror 
            </NavLink>
        </Button>

        <Button size={'sm'} display={{base: 'flex', md: 'none'}}colorScheme={dark ? 'linkedin' : 'white'} variant='outline'>
            <NavLink to={'/terror'}>
                <GiTerror/>
            </NavLink>
        </Button>         

{/* ANIMADAS */}
        <Button display={{base: 'none', md: 'flex'}} colorScheme={dark ? 'linkedin' : 'white'} variant='link' size={'lg'}>
            <NavLink to={'/animadas'}>
                Animadas
            </NavLink>  
        </Button>

        <Button size={'sm'} display={{base: 'flex', md: 'none'}}colorScheme={dark ? 'linkedin' : 'white'} variant='outline'>
            <NavLink to={'/animadas'}>
                <SiHappycow/>
            </NavLink>
        </Button> 

{/* favorites */}

        <Button display={{base: 'none', md: 'flex'}} colorScheme={dark ? 'linkedin' : 'white'} variant='link' size={'lg'}>
            <NavLink to={'/favoritas'}>
                Favoritas +
            </NavLink>
        </Button>

        <Button size={'sm'} display={{base: 'flex', md: 'none'}} colorScheme={dark ? 'linkedin' : 'white'} variant='outline'>
            <NavLink to={'/favoritas'}>
                <BsJournalPlus/>
            </NavLink>
        </Button> 

        </HStack>
    </>
  )
}

export default Links