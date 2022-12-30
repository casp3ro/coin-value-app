import { Kumbh_Sans } from '@next/font/google'
import { createGlobalStyle } from 'styled-components'

export const googleFont = Kumbh_Sans({ subsets: ['latin-ext'] })

export const GlobalStyle = createGlobalStyle`


*, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    scroll-behavior:smooth;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #121318;
  }

  iframe {
    pointer-events: none;
  }

  ::-webkit-scrollbar {
  	width: 8px;
    border-radius: 100px;
	  background-color: #121318;
  }

  ::-webkit-scrollbar-track {
    border-radius: 100px;
    background-color: #121318;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 100px;
    background-color: #747E8C;
  }

  a{
    text-decoration: none;
  }
`
