import React, {useState, useEffect} from 'react'
import { Box } from '@chakra-ui/react'
import BannerContainer from './bannerCompanents/BannerContainer'

const Banner = () => {

  const fondos = [
    'https://www.xtrafondos.com/wallpapers/arcane-league-of-legends-9216.jpg', 
    'https://www.xtrafondos.com/wallpapers/juego-de-guardianes-de-la-galaxia-8279.jpg',
    'https://b-static.besthdwallpaper.com/pelicula-de-animacion-lightyear-2022-buzz-lightyear-papel-pintado-2560x1600-91658_7.jpg',
    'https://www.xtrafondos.com/descargar.php?id=5131&resolucion=2560x1440',
    'https://images.hdqwalls.com/wallpapers/it-chapter-two-2019-poster-bi.jpg'
  ]

  const random = Math.floor(Math.random() * fondos.length)

  const [Fondo, setFondo] = useState(fondos[random])

  // console.log('esto es fondo', fondos[random])

  useEffect(() => {
    setFondo(fondos[random])
  }, [])
  

  return (
    <>  
        {/* <Box h='90px'>

        </Box> */}
        <Box display={'flex'} justifyContent='start' alignItems={'end'} bgImage={Fondo} bgSize='cover' bgPosition="center" bgRepeat="no-repeat"   h='900px' color='white'>
          
          <BannerContainer/> 

        </Box>
    </>
  )
}

export default Banner