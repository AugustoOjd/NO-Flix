import React, {useState} from 'react'
import TopContainer from './topComponents/TopContainer'
import { Box, Center, Divider, Heading, Stack, Button } from '@chakra-ui/react'
import { ChevronDownIcon,ChevronUpIcon  } from '@chakra-ui/icons'
import { useSelector, useDispatch } from 'react-redux'
import {changesR, changesR2, changesV, changesV2} from './reducers/Votacion'


const BannerTop = () => {

    const theme = useSelector((state)=> state.theme.value)
    const votes = useSelector((state)=> state.vote.value)

    const orden = votes.map(e=> e)

    const [Rating, setRating] = useState(true)
    const [Votes, setVotes] = useState(true)
    const [BtnVotes, setBtnVotes] = useState('blue')
    const [BtnRating, setBtnRating] = useState('blue')
    const dispatch= useDispatch()

    const filterRating = ()=>{
        if(Rating === true){
        setRating(!Rating)

        setBtnRating('green')
        setBtnVotes('blue')

        return dispatch(changesR())
        }else{
            setRating(!Rating)

            setBtnRating('red')
            setBtnVotes('blue')

            return dispatch(changesR2())
        }
        
    
  }

  const filterVotes = ()=>{
    if(Votes === true){
        setVotes(!Votes)

        setBtnVotes('green')
        setBtnRating('blue')
        return dispatch(changesV())
        }else{
            setVotes(!Votes)

            setBtnVotes('red')
            setBtnRating('blue')
            return dispatch(changesV2())
        }
  }




  return (
    <>  
        <Box bg={theme ? 'white' : 'gray.900'}>

            <Center bg={theme? 'blue.50' : 'gray.800'}>
                <Heading fontFamily={'sans-serif'} fontSize={{base: '3xl', md: '5xl'}} p={2} color={theme? 'blue.600' : 'linkedin.500'}>Ranking semanal</Heading>
            </Center>
            
            <Center mt={4}>
                <Stack direction='row' spacing={4}>
                    <Button onClick={filterRating} position={'static'} leftIcon={Rating ? <ChevronDownIcon /> : <ChevronUpIcon/>} colorScheme={BtnRating} variant='solid'>
                        Rating
                    </Button>
                    <Button  onClick={filterVotes} position={'static'} leftIcon={Votes ? <ChevronDownIcon /> : <ChevronUpIcon/>} colorScheme={BtnVotes} variant='solid'>
                        Votos
                    </Button>
                </Stack>
            </Center>

            <Box display={'flex'} w='100%' h={{base: '270px', md:'320px'}} p={4} color='white' overflowX={'auto'}>
                
                {orden.map(e=> <TopContainer votos={e.votos} id={e.id} key={e.id} img={e.img} title={e.title} rating={e.rating} reviewCount={e.reviewCount}/>)}
            
            </Box>
        </Box>
        <Divider/>
    </>
  )
}

export default BannerTop