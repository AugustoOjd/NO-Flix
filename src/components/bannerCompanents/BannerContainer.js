import React, {useEffect} from 'react'
import {Box, Heading, Stack, Text, Button, Divider} from '@chakra-ui/react'
import {ArrowForwardIcon} from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { gsap } from 'gsap'


const BannerContainer = ({title, id, description, banner}) => {

  const theme = useSelector((state)=> state.theme.value)

  useEffect(() => {
    gsap.fromTo('.banner', {opacity: 0}, {opacity: 1, duration: 1.5})
    gsap.fromTo('.box', {y: 100}, {y:0, duration:1.5})
  }, [])
  

  return (
    <>
    <Box mt={'90px'} className='banner' display={'flex'} justifyContent='start' alignItems={'end'} bg bgImage={banner} bgSize='cover' bgPosition="center" bgRepeat="no-repeat" w='100%' h={{base: '300px', sm:'400px', md: '900px'}} color='white' >

        <Box boxShadow='md' borderRadius='lg' w={{base: '160px', sm: '200px', md: '450px'}} h={{base: '130px', sm: '180px', md: '380px'}} ml={{base: '25px', md: '50px'}} mb={'50px'} >
          
          <Stack className='box' position={'static'} borderRadius={'lg'} color={'blue.600'} direction={'column'} spacing='0px' w={'100%'} h={'100%'} bg={theme ? 'white' : 'gray.900'}>
            <Box borderBottomWidth={1} display={'flex'} alignItems={'center'} borderTopRadius={'lg'} w='100%' h='25%' >
              <Heading p={3} fontSize={{base: 'auto', md: '4xl'}}>
                {title}
              </Heading>
            </Box>
            {/* <Divider /> */}
            <Box borderBottomWidth={1} overflowY={'auto'} p={2} w='100%' h='63%' >
              <Text color={theme ? 'black' : 'white'} fontSize={{base: 'xs', sm: 'sm', md: 'lg'}}>
                {description}
              </Text>
            </Box>
            <Box borderBottomRadius={'lg'} display={'flex'} justifyContent='end' w='100%' h='12%' >
              
                <Button px={2} onClick={()=> window.scroll(0, 650 )} size={{base: 'xs', md: 'md'}} fontSize={{base: 'xs', md: 'md'}} position={'static'} rightIcon={<ArrowForwardIcon />} colorScheme={'linkedin'} variant={theme ? 'outline' : 'solid'}>
                  <Link  to={`/info/${id}`}>
                    Informacion
                  </Link>
                </Button>

            </Box>
          </Stack>

          </Box>
    </Box>
    </>
  )
}

export default BannerContainer