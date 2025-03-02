import { useState, useEffect } from 'react'
import CryptocurrencyCard from '../../components/CryptocurrencyCard/CryptocurrencyCard'

export const revalidate = 60

const wrapperStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridGap: '24px',
  width: '100%',
}

const fetchTokens = async () => {
  console.log('fetchTokens')

  const response = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?sparkline=true&price_change_percentage=7d&vs_currency=usd&per_page=51'
  )
  const data = await response.json()

  return data
}

const TokensPage = async () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchTokens()
      setData(result)
    }

    fetchData() // Initial fetch

    const intervalId = setInterval(fetchData, 600000) // Re-fetch every 10 minutes (600000 ms)

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId)
  }, [])

  return (
    <>
      <div style={wrapperStyle}>
        {data.map((token: any) => {
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
    </>
  )
}

export default TokensPage
