import React, {useEffect} from 'react'
import StylesFiltro from './StylesFiltro'
import {Box} from '@chakra-ui/react'
import { gsap } from 'gsap'

const MapStyleFiltro = ({categorias}) => {

  // useEffect(() => {
    
  //   gsap.fromTo('.move', {x: -350}, {x: 0, duration: 1})

  // }, [])
  

  return (
    <>
        <Box  display={'flex'} overflowX={'auto'}>
            {categorias.map(e => <StylesFiltro key={e.id} id={e.id} title={e.title} img={e.img} rating={e.rating} reviewCount={e.reviewCount} age={e.age} />)}
        </Box>
    </>
  )
}

export default MapStyleFiltro