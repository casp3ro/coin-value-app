import styled, { keyframes } from 'styled-components'

export const spWaveAf = keyframes`

from {
  transform: scale(0.5, 0.5);
  transform: scale(0.5, 0.5);
  opacity: 0;
}
to {
  transform: scale(1, 1);
  transform: scale(1, 1);
  opacity: 1;
}`

export const spWaveBe = keyframes`
from {
  transform: scale(1, 1);
  opacity: 1;
}
to {
  transform: scale(1.5, 1.5);
  opacity: 0;
}
`

export const Wave = keyframes`
from {

  opacity: 1;
  display:block;
}
to {

  opacity: 0;
  display:none;
}
`

export const WaveLoaderModule = styled.div`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 50px;
  width: 50px;
  margin: -25px 0 0 -25px;
  border-radius: 50%;
  z-index: 0;
  animation-name: ${Wave};
  animation-delay: 1s;
  animation-iteration-count: 1;

  &::before {
    content: '';
    border: 2px solid ${({ theme }) => theme.colors.grey100};
    border-radius: 50%;
    width: 50px;
    height: 50px;
    position: absolute;
    left: 0px;
    transform: scale(1, 1);
    opacity: 0;
    animation: ${spWaveBe} 0.6s infinite linear;
  }

  &::after {
    content: '';
    border: 2px solid ${({ theme }) => theme.colors.grey100};
    border-radius: 50%;
    width: 50px;
    height: 50px;
    position: absolute;
    left: 0px;
    transform: scale(0, 0);
    opacity: 0;
    animation: ${spWaveAf} 0.6s infinite linear;
  }
`

export const DarkOverlay = styled.div`
  position: absolute;
  background-color: rgba(18, 19, 24, 0.8);
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999;
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999;
`
