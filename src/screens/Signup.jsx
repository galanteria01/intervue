import { Button, Container, Flex, Heading, IconButton, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { supabase } from '../utils/supabaseClient'
import { useNavigate } from 'react-router-dom'

const initialValues = {
  username: "",
  email: "",
  password: ""
}

export default function Signup() {
  const [show, setShow] = React.useState(false)
  const [values, setValues] = React.useState(initialValues)
  const navigate = useNavigate();
  const handleClick = () => setShow(!show)
  const handleSignup = async () => {
    try {
      const { error } = await supabase.auth.signInWithOtp({ email: values.email })
    } catch (e) {
      alert(e.message)
    } finally {
      navigate('/')
    }
  }
  return (
    <Flex
      w={'100vw'}
      h={'100vh'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Container>
        <Heading mb={8} textAlign={'center'}>Signup</Heading>
        <VStack spacing={4}>
          <Input
            variant={'filled'}
            placeholder='Username'
            name='username'
            value={values.username}
            onChange={(e) => setValues({ ...values, username: e.target.value })}
          />
          <Input
            variant={'filled'}
            placeholder='Email'
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
          <Button onClick={handleSignup}>Login</Button>
        </VStack>
      </Container>
    </Flex>
  )
}
