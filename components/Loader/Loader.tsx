'use client'
import React from 'react'
import { DarkOverlay, Overlay, WaveLoaderModule } from './Loader.styles'

const Loader = () => {
  return (
    <>
      <DarkOverlay>
        <WaveLoaderModule />
      </DarkOverlay>
      <Overlay />
    </>
  )
}

export default Loader
