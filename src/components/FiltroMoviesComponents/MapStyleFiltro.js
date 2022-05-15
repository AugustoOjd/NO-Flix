import React from 'react'
import StylesFiltro from './StylesFiltro'
import {Box} from '@chakra-ui/react'

const MapStyleFiltro = ({categorias}) => {
  return (
    <>
        <Box display={'flex'} overflowX={'auto'}>
            {categorias.map(e => <StylesFiltro key={e.id} id={e.id} title={e.title} img={e.img} rating={e.rating} reviewCount={e.reviewCount} age={e.age} />)}
        </Box>
    </>
  )
}

export default MapStyleFiltro