'use client'
import Link from 'next/link'
import StyledComponentsRegistry from '../components/StyledComponents'
import Sidebar from '../components/Sidebar/Sidebar'
import { ThemeProvider } from 'styled-components'
import { theme } from '../theme/mainTheme'
import { GlobalStyle } from '../theme/globalStyles'
import {
  ContentWrapper,
  InsideWrapper,
  LayoutWrapper,
  NavContentWrapper,
  ResolutionPlaceholder,
} from './layout.styles'

import { Kumbh_Sans } from '@next/font/google'

const font = Kumbh_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={font.className}>
      <head />
      <StyledComponentsRegistry>
        <body>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <ResolutionPlaceholder>
              <p>App only supported on desktop devices</p>
            </ResolutionPlaceholder>
            <LayoutWrapper>
              <Sidebar />
              <NavContentWrapper>
                {/* <Navbar /> */}
                <ContentWrapper>
                  <InsideWrapper>{children}</InsideWrapper>
                </ContentWrapper>
              </NavContentWrapper>
            </LayoutWrapper>
          </ThemeProvider>
        </body>
      </StyledComponentsRegistry>
    </html>
  )
}
