import { TokensView } from '../../components/TokensView'

const fetchTokens = async () => {
  const res = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?sparkline=true&price_change_percentage=7d&vs_currency=usd&per_page=75',
    {
      next: { revalidate: 60 }, // ISR: refresh every 30s in background
    }
  )
  if (!res.ok) throw new Error('Failed to fetch tokens')
  return res.json()
}

const TokensPage = async () => {
  const data = await fetchTokens()

  return <TokensView initialTokens={data} />
}

export default TokensPage
