import React, {useState} from 'react'
import {Stack, Switch, Circle, Flex} from '@chakra-ui/react'
import {MoonIcon, SunIcon} from '@chakra-ui/icons'



const DarkButton = () => {

  const [Dark, setDark] = useState(true)

  
  return (
    <>  
      <Flex alignItems={'center'}>
        <Circle size='40px' bg='blue.300' color='white' marginRight={'10px'}>
        {Dark ? <MoonIcon/> : <SunIcon/>}
        </Circle>
        <Stack direction='row'>
            <Switch onChange={()=> setDark(!Dark)} colorScheme='teal' size='lg' />
        </Stack>
      </Flex>

    </>
  )
}

export default DarkButton