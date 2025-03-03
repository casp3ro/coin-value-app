'use client'
import React from 'react'
import { CryptocurrencyCardTypes } from './CryptocurrencyCard.types'
import { Sparklines, SparklinesLine } from 'react-sparklines'

import {
  BoxWrapper,
  ContentWrapper,
  Icon,
  IconNameWrapper,
  IconWrapper,
  ModuleWrapper,
  NameWrapper,
  SparklinesWrapper,
  StyledBoxTimeWrapper,
} from './CryptocurrencyCard.styles'
import { HeadingL, HeadingXL, HeadingXS } from '../typography/Typography'

const CryptocurrencyCard = ({
  name,
  icon,
  price,
  change,
  sparklines,
}: CryptocurrencyCardTypes) => {
  const changeNumber = Number(change)

  return (
    <>
      <ModuleWrapper>
        <ContentWrapper>
          <NameWrapper>
            <IconNameWrapper>
              <IconWrapper>
                <Icon src={icon} />
              </IconWrapper>
              <HeadingL>{name}</HeadingL>
            </IconNameWrapper>

            <StyledBoxTimeWrapper>
              <HeadingXS className="changeDays">7d</HeadingXS>
              <BoxWrapper>
                <HeadingXS
                  className="percentage"
                  color={changeNumber < 0 ? '#F93C21' : '#2DBAA1'}
                >
                  {changeNumber.toFixed(2)}%
                </HeadingXS>
              </BoxWrapper>
            </StyledBoxTimeWrapper>
          </NameWrapper>
          <HeadingXL className="price">$ {price}</HeadingXL>
        </ContentWrapper>

        <SparklinesWrapper>
          <Sparklines data={sparklines} margin={0}>
            <SparklinesLine
              style={{
                strokeWidth: 1,
                stroke: '#747E8C',
                fill: '#747E8C',
              }}
            />
          </Sparklines>
        </SparklinesWrapper>
      </ModuleWrapper>
    </>
  )
}

export default CryptocurrencyCard
