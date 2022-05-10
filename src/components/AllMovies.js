import React, { useState, useEffect }  from 'react'
import {Box, Button, Stack, Center} from '@chakra-ui/react'
import {ChevronDownIcon, ChevronUpIcon} from '@chakra-ui/icons'
import MoviesContainer from './allMovieComponents/MoviesContainer'

const AllMovies = () => {

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
        category: 'animada'
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

  console.log(movies)

  const [Age, setAge] = useState(true)
  const [Rating, setRating] = useState(true)
  const [Votes, setVotes] = useState(true)

  const [Array, setArray] = useState(movies)

  const filterRating = ()=>{
        if(Rating == true){
        setRating(!Rating)
        return setArray(Array.sort( (a,b) => b.rating - a.rating ))
        }else{
            setRating(!Rating)
            return setArray(Array.sort( (a,b) => a.rating - b.rating ))
        }
        
    
  }

  const filterVotes = ()=>{
    if(Votes == true){
        setVotes(!Votes)
        return setArray(Array.sort( (a,b) => b.reviewCount - a.reviewCount ))
        }else{
            setVotes(!Votes)
            return setArray(Array.sort( (a,b) => a.reviewCount - b.reviewCount ))
        }
  }

  return (
    <>
        <Box bg='red.300' w='100%' h={'1000px'} p={10} color='white'>

            <Center>
                <Stack direction='row' spacing={4}>
                    <Button onClick={()=> setAge(!Age)} position={'static'} leftIcon={Age ? <ChevronDownIcon /> : <ChevronUpIcon/>} colorScheme='pink' variant='solid'>
                        Año
                    </Button>
                    <Button onClick={filterRating} position={'static'} leftIcon={Rating ? <ChevronDownIcon /> : <ChevronUpIcon/>} colorScheme='pink' variant='solid'>
                        Rating
                    </Button>
                    <Button  onClick={filterVotes} position={'static'} leftIcon={Votes ? <ChevronDownIcon /> : <ChevronUpIcon/>} colorScheme='pink' variant='solid'>
                        Votos
                    </Button>
                </Stack>
            </Center>

            <Box display={'flex'} flexFlow={'wrap'} justifyContent={'center'} overflowY={'auto'} >
                {Array.map(e=> <MoviesContainer key={e.id} img={e.img} title={e.title} rating={e.rating} reviewCount={e.reviewCount} id={e.id}  />)}
            </Box>

        </Box>
    </>
  )
}

export default AllMovies