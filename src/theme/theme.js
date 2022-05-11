import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    brand: {
      primary: 'white',
      blue1: 'blue.500',
      blue2: 'blue.600',
      gray1: 'gray.700',
      gray2:  'gray.900'
    },
  },
})
// export theme = extendTheme{{colors}}

// const colors = {
    // brand: {
    //   primary: 'white',
    //   blue1: 'blue.500',
    //   blue2: 'blue.600',
    //   gray1: 'gray.700',
    //   gray2:  'gray.900'
    // },
  // }
  
// export default extendTheme({ colors })