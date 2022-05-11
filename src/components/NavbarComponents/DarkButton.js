import React, {useState} from 'react'
import {Stack, Switch, Circle, Flex} from '@chakra-ui/react'
import {MoonIcon, SunIcon} from '@chakra-ui/icons'
import { useDispatch } from 'react-redux'
import { change } from '../reducers/ThemeRedux'



const DarkButton = () => {

  const [Dark, setDark] = useState(true)
  const dispatch = useDispatch()

  

  
  return (
    <>  
      <Flex alignItems={'center'}>
        <Circle size='40px' bg='blue.300' color='white' marginRight={'10px'}>
        {Dark ? <MoonIcon/> : <SunIcon/>}
        </Circle>
        <Stack direction='row'>
            <Switch onChange={()=> dispatch(change(setDark(!Dark))) } colorScheme='teal' size='lg' />
        </Stack>
      </Flex>

    </>
  )
}

export default DarkButton