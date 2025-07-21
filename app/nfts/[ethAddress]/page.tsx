import React from 'react'
import { Wrapper } from '../../../components/NFT/NFT.components'
import NFTItem from '../../../components/NFT/NFTItem'
import {
  HeadingL,
  HeadingM,
  HeadingXL,
} from '../../../components/typography/Typography'
import Link from 'next/link'

const fetchNFTs = async (address: string) => {
  if (address.length < 42) {
    return
  }
  const response = await fetch(
    `https://api.rarible.org/v0.1/items/byOwner?owner=ETHEREUM:${address}`
  )

  const data = await response.json()
  return data
}

interface Props {
  params: Promise<{ ethAddress: string }>
}

const NFTOwnerPage = async ({ params }: Props) => {
  const { ethAddress } = await params
  const nftData = await fetchNFTs(ethAddress)

  return (
    <>
      <HeadingL>Nifties of: {ethAddress}</HeadingL>
      <Link href="/nfts">
        <HeadingM>Back to searcher</HeadingM>
      </Link>

      <Wrapper>
        {nftData.items ? (
          nftData.items.map((item: any) => {
            return <NFTItem data={item} key={item.id} />
          })
        ) : (
          <HeadingM>No NFTs</HeadingM>
        )}
      </Wrapper>
    </>
  )
}

export default NFTOwnerPage
