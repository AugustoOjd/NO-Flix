import React from 'react'
import {Box} from '@chakra-ui/react'

const StylesFiltro = ({title, img, rating, reviewCount, age}) => {


  return (
    <>
        <Box bg='tomato' w='100%' p={4} color='white'>
            <ul>
                <li>{title}</li>
                <li>{img}</li>
                <li>{rating}</li>
                <li>{reviewCount}</li>
                <li>{age}</li>
            </ul>
        </Box>
    </>
  )
}

export default StylesFiltro