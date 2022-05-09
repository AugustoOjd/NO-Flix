import React from 'react'
import { Box, Button } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import { deleMovie } from './reducers'

const TestRedux = () => {
    const dispatch = useDispatch()
    const movieList = useSelector((state)=> state.favorites.value)
    
  return (
    <>
    {/* EJEMEPLO DE ELIMINAR MOVIES DEL ARRAY */}
        <Box  overflowY={'auto'} bg='gray.800' w='100%' h='500px'p={4} color='white'>

          {
            movieList.map(e=>
              <div>
                <h2>{e.title}</h2>
                <p>{e.rating}</p>
                <p>{e.id}</p>
                <Button position={'static'} onClick={()=> {dispatch(deleMovie({ id: e.id}))}} bg={'blue.500'}>delete</Button>
              </div>
              )
          }

           {/* {movieList.map(e=>
               <ul>         
                    <li>{e.title}</li>     
                    <li>{e.rating}</li>
                    <Button position={'static'} onClick={()=> {dispatch(deleMovie({ id: e.id}))}} bg={'blue.500'}>delete</Button>       
                </ul>


           )} */}
        </Box>
    </>
  )
}

export default TestRedux