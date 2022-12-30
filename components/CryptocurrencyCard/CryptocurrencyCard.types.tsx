export type CryptocurrencyCardTypes = {
  name: string
  icon: string
  price: string
  low?: string
  high?: string
  change: string
  sparklines: number[]
  marketChange24?: string
  marketChangePercentage24?: string
  priceChange24?: string
  priceChangePercentage24?: string
}

export type ColorTypes = {
  color?: string
}
