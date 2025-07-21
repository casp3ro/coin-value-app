'use client'

import { useEffect, useState } from 'react'
import CryptocurrencyCard from './CryptocurrencyCard/CryptocurrencyCard'

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
    const fetchLiveData = async () => {
      try {
        const res = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?sparkline=true&price_change_percentage=7d&vs_currency=usd&per_page=75'
        )
        const data = await res.json()
        setTokens(data)
      } catch (err) {
        console.error('Client fetch failed', err)
      }
    }

    // Poll every 60s
    const interval = setInterval(fetchLiveData, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={wrapperStyle}>
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
    </div>
  )
}
