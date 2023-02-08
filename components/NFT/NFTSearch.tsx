'use client'
import React, { useState } from 'react'
import styled from 'styled-components'
import { HeadingXL } from '../typography/Typography'
import { ethers } from 'ethers'
import { useRouter } from 'next/navigation'

const ModuleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.colors.dark200};
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.dark300};
  padding: 16px 32px;
  color: ${({ theme }) => theme.colors.light100};
  width: 600px;
  height: 72px;
  &:focus-visible {
    outline: none;
  }
`

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  flex-direction: column;
  padding: 7%;
  border: 1px solid ${({ theme }) => theme.colors.dark300};
`

const StyledButton = styled.button`
  font-family: inherit;
  margin-top: 40px;
  background-color: ${({ theme }) => theme.colors.dark300};
  border: 0;
  outline: 0;
  color: ${({ theme }) => theme.colors.light100};
  padding: 0 24px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 56px;
  font-weight: 500;
  font-size: 18px;
  padding: 16px 24px;
  border-radius: 10px;
  margin-left: 32px;
  line-height: 0;
  &.active {
    background-color: ${({ theme }) => theme.colors.blue};
  }
  &.disactive {
    background-color: ${({ theme }) => theme.colors.dark300};
  }
`

const NFTSearch = () => {
  const [address, setAddress] = useState<string>('')
  const [active, setActive] = useState<boolean>(false)
  const router = useRouter()

  const handleSubmit = () => {
    const isAddress = ethers.utils.isAddress(address)
    if (isAddress) {
      router.push(`nfts/${address}`)
    }
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value)
    const isAddress = ethers.utils.isAddress(e.target.value)
    if (isAddress) {
      setActive(true)
    } else {
      setActive(false)
    }
  }
  return (
    <ModuleWrapper>
      <InputWrapper>
        <HeadingXL>Check NFTs portfolio</HeadingXL>
        <StyledInput
          value={address}
          onChange={onChangeHandler}
          placeholder="Write Ethereum address"
        />

        <StyledButton
          onClick={() => handleSubmit()}
          className={active ? 'active' : 'disactive'}
        >
          Search
        </StyledButton>
      </InputWrapper>
    </ModuleWrapper>
  )
}

export default NFTSearch
