import React, {useState} from 'react'
import {Stack, Switch, Circle, Flex} from '@chakra-ui/react'
import {MoonIcon, SunIcon} from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { change } from '../reducers/ThemeRedux'



const DarkButton = () => {

  const [Dark, setDark] = useState(true)
  const dispatch = useDispatch()

  const dark = useSelector((state)=> state.theme.value)

  
  return (
    <>  
      <Flex alignItems={'center'}>
        <Circle size={{base: '22px', md: '40px'}} bg={dark ? 'blue.500' : 'orange.500'} color='white' marginRight={'10px'}>
        {Dark ? <MoonIcon/> : <SunIcon/>}
        </Circle>
        <Stack direction='row'>
            <Switch onChange={()=> dispatch(change(setDark(!Dark))) } colorScheme='teal' size={'sm'} />
        </Stack>
      </Flex>

    </>
  )
}

export default DarkButton