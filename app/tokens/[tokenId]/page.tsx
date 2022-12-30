import React from 'react'

type Props = {
  params: {
    tokenId: string
  }
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
  const data = await fetchToken(params.tokenId)
  console.log(data)
  return <div>Token : {params.tokenId}</div>
}

export default Home
