import React from 'react'
import { Box, Button } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import { deleMovie } from './reducers'

const TestRedux = () => {
    const dispatch = useDispatch()
    const movieList = useSelector((state)=> state.favorites.value)
    
  return (
    <>
        <Box bg='gray.800' w='100%' h='500px'p={4} color='white'>
           
           {movieList.map(e=>
               <ul>         
                    <li>{e.title}</li>     
                    <li>{e.rating}</li>
                    <Button onClick={()=> {dispatch(deleMovie({ id: e.id}))}} bg={'blue.500'}>delete</Button>       
                </ul>


           )}
        </Box>
    </>
  )
}

export default TestRedux