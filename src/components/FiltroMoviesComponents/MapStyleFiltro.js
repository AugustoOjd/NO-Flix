import React from 'react'
import StylesFiltro from './StylesFiltro'
import {Box} from '@chakra-ui/react'

const MapStyleFiltro = ({categorias}) => {
  return (
    <>
        <Box>
            {categorias.map(e => <StylesFiltro title={e.title} img={e.img} rating={e.rating} reviewCount={e.reviewCount} age={e.age} />)}
        </Box>
    </>
  )
}

export default MapStyleFiltro