'use client'
import React from 'react'
import {
  ResolutionPlaceholder,
  LayoutWrapper,
  NavContentWrapper,
  ContentWrapper,
  InsideWrapper,
} from '../app/layout.styles'
import Sidebar from './Sidebar/Sidebar'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../theme/globalStyles'
import { theme } from '../theme/mainTheme'
import StyledComponentsRegistry from './StyledComponents'

interface Props {
  children: React.ReactNode
}

export const MainContent = ({ children }: Props) => {
  return (
    <>
      <StyledComponentsRegistry>
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
      </StyledComponentsRegistry>
    </>
  )
}

export default MainContent
