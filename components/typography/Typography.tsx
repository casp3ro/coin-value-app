'use client'
import React from 'react'
import { HeadingTypes, HeadingXSTypes } from './Typography.types'
import { TextL, TextM, TextXL, TextXS } from './Typography.styles'
import { Kumbh_Sans } from '@next/font/google'
import { googleFont } from '../../theme/globalStyles'

export const HeadingXS = ({ children, className, color }: HeadingXSTypes) => {
  return (
    <TextXS className={`${className} ${googleFont.className}`} color={color}>
      {children}
    </TextXS>
  )
}

export const HeadingM = ({ children, className }: HeadingTypes) => {
  return (
    <TextM className={`${className} ${googleFont.className}`}>{children}</TextM>
  )
}

export const HeadingL = ({ children, className }: HeadingTypes) => {
  return (
    <TextL className={`${className} ${googleFont.className}`}>{children}</TextL>
  )
}

export const HeadingXL = ({ children, className }: HeadingTypes) => {
  return (
    <TextXL className={`${className} ${googleFont.className}`}>
      {children}
    </TextXL>
  )
}
