import React from 'react'

import { SidebarItemTypes } from './SidebarItem.types'
import Link from 'next/link'
import Image from 'next/image'
import {
  IconWrapper,
  ItemWrapper,
  ModuleWrapper,
  iconStyle,
  linkStyle,
} from './SidebarItem.styles'
import { useRouter } from 'next/router'
import { usePathname } from 'next/navigation'
import { HeadingL, HeadingM } from '../../typography/Typography'

const SidebarItem: React.FC<SidebarItemTypes> = ({
  children,
  iconFile,
  to,
}) => {
  const currentRoute = usePathname()
  return (
    <Link style={linkStyle} href={to}>
      <ModuleWrapper className={currentRoute === to ? 'active' : ''}>
        <ItemWrapper>
          <IconWrapper>
            <Image style={iconStyle} src={iconFile} alt="icon" />
          </IconWrapper>
          <HeadingM>{children}</HeadingM>
        </ItemWrapper>
      </ModuleWrapper>
    </Link>
  )
}

export default SidebarItem
