'use client'
import React from 'react'
import { HeadingTypes, HeadingXSTypes } from './Typography.types'
import { TextL, TextM, TextXL, TextXS } from './Typography.styles'

export const HeadingXS = ({ children, className, color }: HeadingXSTypes) => {
  return (
    <TextXS className={`${className} `} color={color}>
      {children}
    </TextXS>
  )
}

export const HeadingM = ({ children, className }: HeadingTypes) => {
  return <TextM className={`${className} `}>{children}</TextM>
}

export const HeadingL = ({ children, className }: HeadingTypes) => {
  return <TextL className={`${className} `}>{children}</TextL>
}

export const HeadingXL = ({ children, className }: HeadingTypes) => {
  return <TextXL className={`${className} `}>{children}</TextXL>
}
