import { Flex, Image } from '@chakra-ui/react'
import React from 'react'
import ColorModeSwitcher from './ColorModeSwitcher'

export default function Navbar() {
  return (
    <Flex
      w={'80%'}
      justifyContent={'space-between'}
      alignItems={'center'}
      m={2}
    >
      <Image h={8} src='/logo.png' />
      <Flex>
        <ColorModeSwitcher />
      </Flex>
    </Flex>
  )
}
