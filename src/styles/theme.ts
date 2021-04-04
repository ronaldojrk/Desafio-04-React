import { extendTheme } from '@chakra-ui/react'



export const theme = extendTheme({
  colors: {
    gray: {

      "500": "#47585B",//Headings and Text
      "400": "#999999", //Info forte
      "100": "#DADADA", //Info
      "50": "#F5F8FA", //Headings and Text
    },
    yellow: {
      "500": "#FFBA08", //Highlight
    }

  },
  fonts: {
    heding: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.500'
      }
    }
  }
})