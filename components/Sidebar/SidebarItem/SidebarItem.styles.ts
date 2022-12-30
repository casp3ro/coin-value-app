import styled from 'styled-components'
import { IsActiveTypes } from './SidebarItem.types'

export const ModuleWrapper = styled.div`
  width: 100%;
  position: relative;
  cursor: pointer;

  &.active {
    > div {
      background-color: ${({ theme }) => theme.colors.dark300};
    }
    img {
      filter: brightness(0) invert(1);
    }
    p {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
  &:hover {
    &::after {
      content: '';
      position: absolute;
      width: 4px;
      height: 32px;
      background: ${({ theme }) => theme.colors.blue};
      border-radius: 0px 10px 10px 0px;
      left: -16px;
      top: 0;
      bottom: 0;
      margin: auto 0;
      @media ${({ theme }) => theme.device.tablet} {
        width: 0px;
        height: 0px;
      }
    }
  }
`

export const ItemWrapper = styled.div<IsActiveTypes>`
  padding: 16px 24px;
  width: 100%;
  margin: 8px 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  @media ${({ theme }) => theme.device.laptopS} {
    padding: 8px;
    justify-content: center;
  }
`

export const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.dark300};
  border-radius: 100px;
  margin-right: 8px;
  @media ${({ theme }) => theme.device.laptopS} {
    margin-right: 0px;
  }
  &.img {
    filter: invert(55%) sepia(96%) saturate(1427%) hue-rotate(183deg)
      brightness(100%) contrast(97%);
    color: red;
  }
`

export const iconStyle = {
  width: ' 20px',
  height: '20px',
  margin: 'auto',
  filter:
    'invert(55%) sepia(96%) saturate(1427%) hue-rotate(183deg) brightness(100%) contrast(97%)',
}

export const linkStyle = {
  width: '100%',
  //   position: "relative",
  //   cursor: "pointer",
}
