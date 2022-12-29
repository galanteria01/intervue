import { Button, Container, Flex, Textarea, VStack } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <VStack
      minH={'100vh'}
      w={'100%'}
      px={8}
    >
      <Navbar />
      <VStack
        flex={1}
        w={'80%'}
      >
        <Textarea
          placeholder='This is a area to add the experience'
          variant={'filled'}
        />
        <Flex justifyContent={'flex-start'}>
          <Button mx={2} colorScheme={'red'}>
            Submit Review
          </Button>
          <Button mx={2} color={'red.200'}>
            Clear
          </Button>
        </Flex>
      </VStack>
    </VStack>
  )
}
