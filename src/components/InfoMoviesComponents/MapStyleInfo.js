import React from 'react'
import {Box} from '@chakra-ui/react'
import InfoMovies from './InfoMovies'

const MapStyleInfo = ({info}) => {
  return (
    <>
        <Box>
            {info.map(e=> <InfoMovies coment={e.coment} img={e.img} title={e.title} rating={e.rating} age={e.age} category={e.category}  />)}
        </Box>

    </>
  )
}

export default MapStyleInfo