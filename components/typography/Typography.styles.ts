import styled from 'styled-components'

export const TextL = styled.h3`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: ${({ theme }) => theme.colors.light100};
  &.account {
    line-height: 0;
    cursor: pointer;
  }
  &.funds {
    line-height: 0;
  }
  &.add-channel {
    margin-right: 56px;
    position: relative;
    &::after {
      background-color: ${({ theme }) => theme.colors.dark300};
      position: absolute;
      content: '';
      height: 32px;
      width: 2px;
      right: -24px;
      top: 2px;
    }
  }
`

export const TextM = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 36px;
  color: ${({ theme }) => theme.colors.light100};
  margin: 0;
  &.user-name {
    margin-left: 12px;
  }
  &.authorize {
    color: ${({ theme }) => theme.colors.yellow};
  }
`

export const TextXL = styled.h3`
  font-weight: 600;
  font-size: 30px;
  line-height: 40px;
  color: ${({ theme }) => theme.colors.light100};
  &.price {
    line-height: 0;
    letter-spacing: 1px;
  }
`

export const TextXS = styled.h3`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.grey100};
  text-transform: uppercase;
  margin: 0;
  &.percentage {
    color: ${({ color }) => color};
  }
  &.message {
    text-transform: none;
  }
  &.label {
    margin: 0 0 8px 16px;
  }
  &.white {
    color: ${({ theme }) => theme.colors.light100};
  }
  &.changeDays {
    margin-right: 8px;
  }
`
