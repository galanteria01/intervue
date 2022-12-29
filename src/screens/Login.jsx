import { Button, Container, Flex, Heading, IconButton, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { supabase } from '../utils/supabaseClient'
import { useToast } from '@chakra-ui/react'

const initialValues = {
  email: "",
  password: ""
}

export default function Login() {
  const [show, setShow] = React.useState(false)
  const [values, setValues] = React.useState(initialValues)
  const toast = useToast()
  const handleClick = () => setShow(!show)
  const handleLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ username: values.username, email: values.email, password: values.password })
      console.log(data)
    } catch (e) {
      alert(e.message)
    } finally { }
  }
  return (
    <Flex
      w={'100vw'}
      h={'100vh'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Container>
        <Heading mb={8} textAlign={'center'}>Login</Heading>
        <VStack spacing={4}>
          <Input
            variant={'filled'}
            placeholder='Email'
            type='email'
            name='email'
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
          <InputGroup>
            <Input
              type={show ? 'text' : 'password'}
              variant={'filled'}
              placeholder='Password'
              name="password"
              value={values.password}
              onChange={(e) => setValues({ ...values, password: e.target.value })}
            />
            <InputRightElement width='4.5rem'>
              <IconButton ml={8} bg={'transparent'} onClick={handleClick}>
                {show ? <AiFillEyeInvisible /> : <AiFillEye />}
              </IconButton>
            </InputRightElement>
          </InputGroup>
          <Button onClick={handleLogin}>Login</Button>
        </VStack>
      </Container>
    </Flex>
  )
}
