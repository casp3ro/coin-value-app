import styled from 'styled-components'

export const ModuleWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.dark200};
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.colors.dark300};
  overflow: hidden;
  height: 100%;
  width: 20%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${({ theme }) => theme.device.laptopM} {
    width: 25%;
  }
  @media ${({ theme }) => theme.device.laptopS} {
    width: 100px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    position: fixed;
    z-index: 100;
    height: 72px;
    width: 100vw;
    bottom: 0;
    margin: 0 auto;
    left: 0;
    right: 0;
    display: grid;
    justify-content: space-between;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    padding: 0 16px;
    border-radius: 0px;
  }
`

export const StyledCircleWrapper = styled.div`
  width: 128px;
  height: 128px;
  border-radius: 1000px;
  margin: 40px 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${({ theme }) => theme.device.laptopS} {
    display: none;
  }
`

export const StyledBorder = styled.div`
  width: 116px;
  height: 116px;
  border-radius: 1000px;
  border: 1px solid ${({ theme }) => theme.colors.dark300};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Icon = styled.img`
  width: 48px;
  height: auto;
`
