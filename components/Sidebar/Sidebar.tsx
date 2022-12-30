import React from 'react'
import IconPrices from '../../assets/icons/prices.svg'
import IconNft from '../../assets/icons/nft.svg'
import EthereumBlue from '../../assets/icons/ethereum-blue.svg'
import Image from 'next/image'
import SidebarItem from './SidebarItem/SidebarItem'
import {
  ModuleWrapper,
  StyledBorder,
  StyledCircleWrapper,
} from './Sidebar.styles'
import { HeadingL } from '../typography/Typography'

const Sidebar = () => {
  return (
    <ModuleWrapper>
      <StyledCircleWrapper>
        <StyledBorder>
          <Image alt="icon" src={EthereumBlue} />
        </StyledBorder>
      </StyledCircleWrapper>
      <HeadingL>Coin Value</HeadingL>
      <SidebarItem iconFile={IconPrices} to="/tokens">
        Tokens
      </SidebarItem>

      <SidebarItem iconFile={IconNft} to="/nfts">
        NFTs
      </SidebarItem>
    </ModuleWrapper>
  )
}

export default Sidebar
