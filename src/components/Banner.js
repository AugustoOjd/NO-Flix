import React, {useState, useEffect} from 'react'
import {Box, Heading, Stack, Text, Button} from '@chakra-ui/react'
import {ArrowForwardIcon} from '@chakra-ui/icons'

const Banner = () => {

  const fondos = [
    'https://www.xtrafondos.com/wallpapers/arcane-league-of-legends-9216.jpg', 
    'https://www.xtrafondos.com/wallpapers/juego-de-guardianes-de-la-galaxia-8279.jpg',
    'https://b-static.besthdwallpaper.com/pelicula-de-animacion-lightyear-2022-buzz-lightyear-papel-pintado-2560x1600-91658_7.jpg'
  ]

  const random = Math.floor(Math.random() * fondos.length)

  const [Fondo, setFondo] = useState(fondos[random])

  // console.log('esto es fondo', fondos[random])

  useEffect(() => {
    setFondo(fondos[random])
  }, [])
  

  return (
    <>  
        <Box h='90px'>

        </Box>
        <Box display={'flex'} justifyContent='start' alignItems={'end'} bgImage={Fondo} bgSize='cover' bgPosition="center" bgRepeat="no-repeat"   h='700px' color='white'>
          
          <Box bg={'gray.100'} w='400px' h='300px' margin={'50px'} >
          
          <Stack direction={'column'} spacing='2px'>
            <Box w='100%' h='100px' bg='yellow.200'>
              <Heading>
                Titulo del fondo
              </Heading>
            </Box>
            <Box w='100%' h='160px' bg='tomato'>
              <Text>
                Descripcion de la misma
              </Text>
            </Box>
            <Box display={'flex'} justifyContent='end' w='100%' h='40px' bg='pink.100'>
              <Button position={'static'} rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
                Informacion
              </Button>
            </Box>
          </Stack>

          </Box>
        </Box>
    </>
  )
}

export default Banner