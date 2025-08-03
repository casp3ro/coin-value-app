'use client'

import { useEffect, useState } from 'react'
import CryptocurrencyCard from './CryptocurrencyCard/CryptocurrencyCard'
import styled from 'styled-components'

const wrapperStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '24px',
  width: '100%',
}

type Token = {
  id: string
  name: string
  current_price: number
  image: string
}

export const TokensView = ({ initialTokens }: { initialTokens: Token[] }) => {
  const [tokens, setTokens] = useState(initialTokens)

  useEffect(() => {
    // Fetch fresh data right away (doesn't wait 30s)
    const fetchFreshData = async () => {
      try {
        const res = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?sparkline=true&price_change_percentage=7d&vs_currency=usd&per_page=75',
          {
            cache: 'no-store', // bypass ISR and force fresh
          }
        )
        const data = await res.json()
        setTokens(data)
      } catch (err) {
        console.error('Error fetching fresh tokens:', err)
      }
    }

    fetchFreshData()

    // Optionally re-fetch every 30s
    const interval = setInterval(fetchFreshData, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Wrapper>
      {tokens.map((token: any) => {
        const name = token.name || ' '
        const icon = token.image || ' '
        const price = token.current_price || ' '
        const change = token.price_change_percentage_7d_in_currency || ' '
        const sparklines = token.sparkline_in_7d.price || []
        return (
          <CryptocurrencyCard
            key={token.id}
            name={name}
            icon={icon}
            price={price}
            change={change}
            sparklines={sparklines}
          />
        )
      })}
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;
  box-sizing: border-box;

  @media ${({ theme }) => theme.device.laptopM} {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media ${({ theme }) => theme.device.tablet} {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 0 12px;
  }
`
