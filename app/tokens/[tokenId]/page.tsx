import React from 'react'

type Props = {
  params: Promise<{ tokenId: string }>
}

const fetchToken = async (id: string) => {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`, {
    next: {
      revalidate: 60,
    },
  })
  return response.json()
}

const Home = async ({ params }: Props) => {
  const { tokenId } = await params
  const data = await fetchToken(tokenId)
  console.log(data)
  return <div>Token : {tokenId}</div>
}

export default Home
