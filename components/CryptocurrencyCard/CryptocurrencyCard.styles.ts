import styled from 'styled-components'
import { ColorTypes } from './CryptocurrencyCard.types'

export const ModuleWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.dark200};
  overflow: hidden;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.dark300};
  border-radius: 20px;
  position: relative;
  @media ${({ theme }) => theme.device.mobileXL} {
  }
  &:hover {
    box-shadow: var(--shadow-medium-hover);
    > div {
      display: block;
    }
  }
`

export const ContentWrapper = styled.div`
  padding: 32px 32px 16px;
`

export const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.dark300};
  border-radius: 100px;
  margin-right: 12px;
`

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin: auto;
  filter: grayscale(1);
`

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  justify-content: space-between;
`

export const IconNameWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const BoxWrapper = styled.div<ColorTypes>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.dark300};
  border-radius: 10px;
  width: 72px;
  height: 32px;
`

export const SparklinesWrapper = styled.div`
  position: relative;
  top: 7px;
  width: 100%;
  left: 0%;
`

export const StyledBoxTimeWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const StyledTimeInfo = styled.div`
  font-weight: 800;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #a3b2c0;
  margin-right: 8px;
`
