import React from 'react'
import TopContainer from './topComponents/TopContainer'
import { Box, Center, Heading } from '@chakra-ui/react'



const movies = [
    {
        id: 1,
        title: 'Arcane',
        description: 'Arcane es una buena serie',
        img: 'https://i.blogs.es/79f36c/portada-analisis-trailer-arcane-league-of-legends/1366_2000.jpeg',
        rating: 4,
        reviewCount: 54
    },

    {
        id: 2,
        title: 'LightYear',
        description: 'Buena pelicula',
        img: 'https://www.prensario.net/Multimedios/imgs/50253_750.jpg',
        rating: 3.6,
        reviewCount: 23
    },
    
    {
        id: 3,
        title: 'Guardianes de la galaxia',
        description: 'una peli mas de superheroe',
        img: 'https://es.web.img3.acsta.net/newsv7/22/01/29/15/21/4874804.jpg',
        rating: 2,
        reviewCount: 45
    },
    {
        id: 4,
        title: 'One punch-Man',
        description: 'una peli animada',
        img: 'https://www.animenewsnetwork.com/images/encyc/A16840-4113667313.1443583619.jpg',
        rating: 3,
        reviewCount: 52
    },
    {
        id: 5,
        title: 'Naruto',
        description: 'una peli mas de superheroe',
        img: 'https://pictures.abebooks.com/isbn/9791090870000-es.jpg',
        rating: 2,
        reviewCount: 71
    },
    {
        id: 6,
        title: 'IT',
        description: 'pelicula it',
        img: 'https://sm.ign.com/ign_es/movie/i/it-capitul/it-capitulo-2_4xsj.jpg',
        rating: 1,
        reviewCount: 45
    },    {
        id: 7,
        title: 'Viernes 13',
        description: 'viernes 13',
        img: 'https://www.prensalibre.com/wp-content/uploads/2019/09/viernes-13.jpeg?quality=52',
        rating: 4,
        reviewCount: 13
    },
    {
        id: 8,
        title: 'Un lugar en silencio',
        description: 'un lugar en silencio',
        img: 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/654342.jpg',
        rating: 5,
        reviewCount: 6
    }


  ]


const BannerTop = () => {

    const orden = movies.sort( (a,b) => b.rating - a.rating )
    const limit = orden.slice(0, 10)
    

    // console.log('esto es ordern', orden)


  return (
    <>  
        <Box bg={'gray.200'}>

            <Center >
                <Heading p={2}>Top 10</Heading>
            </Center>
            <Box display={'flex'} w='100%' h={'320px'} p={4} color='white' overflowX={'auto'}>


                
                {limit.map(e=> <TopContainer id={e.id} key={e.id} img={e.img} title={e.title} rating={e.rating} reviewCount={e.reviewCount}/>)}
            
            </Box>
        </Box>
    </>
  )
}

export default BannerTop