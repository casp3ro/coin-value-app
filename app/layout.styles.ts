import styled from 'styled-components'
import { theme } from '../theme/mainTheme'

export const LayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 16px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.dark100};
  @media ${theme.device.tablet} {
    padding: 16px 16px 86px;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  overflow-y: hidden;
  position: relative;
`

export const NavContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: hidden;
  padding-left: 16px;
  position: relative;
  display: flex;
  flex-direction: column;
  @media ${theme.device.tablet} {
    padding-left: 0px;
  }
`

export const ResolutionPlaceholder = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: ${({ theme }) => theme.colors.dark100};
  display: none;
  justify-content: center;
  align-items: center;
  @media ${theme.device.laptopS} {
    display: flex;
  }
`

export const InsideWrapper = styled.div`
  width: 100%;
  height: auto;
  overflow-y: auto;
  position: relative;
`
