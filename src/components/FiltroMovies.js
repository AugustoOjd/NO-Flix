import React, {useEffect, useState} from 'react'
import {Box, Heading} from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import MapStyleFiltro from './FiltroMoviesComponents/MapStyleFiltro'

const FiltroMovies = () => {

    const movies = [
        {
            id: 1,
            title: 'Arcane',
            description: 'Arcane es una buena serie',
            img: 'https://i.blogs.es/79f36c/portada-analisis-trailer-arcane-league-of-legends/1366_2000.jpeg',
            rating: 4,
            reviewCount: 54,
            category: 'animadas'
        },
    
        {
            id: 2,
            title: 'LightYear',
            description: 'Buena pelicula',
            img: 'https://www.prensario.net/Multimedios/imgs/50253_750.jpg',
            rating: 3.6,
            reviewCount: 23,
            category: 'animadas'
        },
        
        {
            id: 3,
            title: 'Guardianes de la galaxia',
            description: 'una peli mas de superheroe',
            img: 'https://es.web.img3.acsta.net/newsv7/22/01/29/15/21/4874804.jpg',
            rating: 2,
            reviewCount: 45,
            category: 'accion'
        },
        {
            id: 4,
            title: 'One punch-Man',
            description: 'una peli animada',
            img: 'https://www.animenewsnetwork.com/images/encyc/A16840-4113667313.1443583619.jpg',
            rating: 3,
            reviewCount: 52,
            category: 'animadas'
        },
        {
            id: 5,
            title: 'Naruto',
            description: 'una peli mas de superheroe',
            img: 'https://pictures.abebooks.com/isbn/9791090870000-es.jpg',
            rating: 2,
            reviewCount: 71,
            category: 'animadas'
        },
        {
            id: 6,
            title: 'IT',
            description: 'pelicula it',
            img: 'https://sm.ign.com/ign_es/movie/i/it-capitul/it-capitulo-2_4xsj.jpg',
            rating: 1,
            reviewCount: 45,
            category: 'terror'
        },    {
            id: 7,
            title: 'Viernes 13',
            description: 'viernes 13',
            img: 'https://www.prensalibre.com/wp-content/uploads/2019/09/viernes-13.jpeg?quality=52',
            rating: 4,
            reviewCount: 13,
            category: 'terror'
        },
        {
            id: 8,
            title: 'Un lugar en silencio',
            description: 'un lugar en silencio',
            img: 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/654342.jpg',
            rating: 5,
            reviewCount: 6,
            category: 'terror'
        }
    
    
      ]

    const {categoria} = useParams()
    const [Movies, setMovies] = useState([])
    
    
    useEffect(() => {
        setMovies(movies.filter(e=> e.category === categoria))
    }, [categoria])

return (

    
    <>
        <Box bg='blue.300' w='100%' h='500px'p={4} color='white'>
            <Heading>{categoria}</Heading>
            {<MapStyleFiltro categorias={Movies}/>}
        </Box>

    </>
)
}

export default FiltroMovies