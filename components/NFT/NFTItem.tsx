'use client'
import React, { FC } from 'react'
import styled from 'styled-components'
import { HeadingM } from '../typography/Typography'

const ModuleWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.dark200};
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.dark300};
  color: ${({ theme }) => theme.colors.light100};
  width: 100%;
  height: auto;
  margin-top: 5vh;
`

const Image = styled.img`
  width: 100%;

  object-fit: cover;
  width: 100%;
  height: 25vh;

  border-radius: 20px 20px 0 0;
`

const TextWrapper = styled.div`
  padding: 24px 32px;
`

type INFTItem = {
  data: any
}

const NFTItem: FC<INFTItem> = ({ data }) => {
  const name = data?.meta?.name || 'loading'
  const image = data?.meta?.content[0]?.url
  return (
    <ModuleWrapper>
      <Image src={image} />
      <TextWrapper>
        <HeadingM>{name}</HeadingM>
      </TextWrapper>
    </ModuleWrapper>
  )
}

export default NFTItem
