import {
  Box,
  Button,
  Center,
  Divider,
  FormControl,
  FormLabel,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { signin } from '../redux/auth/authSlice';
const Wrapper = styled.div`
   input{
    border-radius: 0px;
   }

  .form-control {
    margin: 1rem 0;
  }
  .link {
    border-radius: 0px;
    background-color: #333;
    color: white;
    font-size: 0.9rem;
    &:hover {
      background-color: #e8ebed;
      color: #333;
    }
  }

  .form-container {
    font-size: 0.9rem;
    color: #555;
  }

  .forms {
    padding: 4rem 0;
  }
`;

function SignIn() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { isLoading, error,isAuth } = useSelector(store => store.auth);
  const [inputErr, setInputErr] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const handleChange = e => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSignIn = () => {
     for (let key in formData) {
       if (formData[key] === '') {
         setInputErr(true);
         return;
       }
     }

     if (inputErr) {
       setInputErr(false);
     }

     dispatch(signin(formData));


  };

  useEffect(() =>{
    if (isAuth) {
        if(location.state.from){
        console.log(location.state.from);

          navigate(location.state.from,{replace:true});
        }
        else{
          navigate('/');    

        }
    }
  }, [isAuth]);
  return (
    <Box w="85%" mx="auto" as={Wrapper}>
      <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw67bc4699/images/banners/sign-in_d.png?yocs=s_" />
      <Box my={8} className="form-container">
        <Text
          borderBottom={'1px solid'}
          fontSize="1.4rem"
          color="#333"
          fontWeight={'100'}
          py={2}
        >
          Sign In or Sign Up
        </Text>
        <Stack direction={{ base: 'column', md: 'row' }} justify="space-around">
          <Box className="forms">
            <Text textAlign={'center'} fontSize="1.2rem">
              SIGN IN
            </Text>
            <Text>If you already have an accoun with us, sign in below</Text>
            <FormControl className="form-control">
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input
                id="email"
                onChange={handleChange}
                value={formData.email}
              />
            </FormControl>
            <FormControl className="form-control">
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                type="password"
                id="password"
                onChange={handleChange}
                value={formData.password}
              />
            </FormControl>
            {error && <Text>{error}</Text>}
            {inputErr && <Text>Fill all fields</Text>}
            <Center m={2}>
              <Button
                isLoading={isLoading}
                onClick={handleSignIn}
                className="link"
              >
                SIGN IN
              </Button>
            </Center>
          </Box>
          <Box alignSelf="center">
            <Text
              bg="white"
              border="1px solid"
              borderRadius={'full'}
              w="fit-content"
              p={2}
            >
              OR
            </Text>
          </Box>
          <VStack className="forms">
            <Text textTransform={'uppercase'} fontSize="1.2rem">
              sign up
            </Text>
            <Text>
              Create an account to access the best of your favorite store
            </Text>
            <Image
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwf946a6ac/images/loyalty/July19/nonloyalty_5thmkt_signuptile_D.png?yocs=s_"
              w="400px"
            />
            <Button as={Link} to='/sign-up' className="link">CREATE AN ACCOUNT</Button>
          </VStack>
        </Stack>
      </Box>
    </Box>
  );
}

export default SignIn;
