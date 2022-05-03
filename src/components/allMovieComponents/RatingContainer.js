import React from 'react'
import { StarIcon } from '@chakra-ui/icons'

const ratingContainer = ({rating}) => {
  return (
    <>
                            {Array(5)
                                .fill('')
                                .map((_, i) => (
                                <StarIcon
                                    key={i} 
                                    color={i < rating ? 'teal.500' : 'gray.300'}
                                />
                                ))}
    </>
  )
}

export default ratingContainer