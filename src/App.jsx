import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Flex,
  Divider,
  theme,
  HStack,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import AllRoutes from './routes/AllRoutes';
import OfferBanner from './components/OfferBanner';
import Navbar from './components/navbar/Navbar';
import PickStore from './components/PickStore';
import Footer from './components/footer/Footer';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals, clearCart, clearCartLocal, getCartItems } from './redux/cart/cartSlice';

function App() {
  const {isAuth} = useSelector(store => store.auth);
  const {cartItems} = useSelector(store => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {

    if(isAuth){
      // fetch cart items
      dispatch(getCartItems());
    }
    else{
      dispatch(clearCartLocal());
    }
  },[isAuth]);


  useEffect(() => {
      dispatch(calculateTotals());
  },[cartItems])


  return (
    <ChakraProvider theme={theme}>
      <OfferBanner />
      <PickStore />
      <Navbar />
      <Box w="100%" maxW="1100px" mx="auto">
        <AllRoutes />
      </Box>
        <Footer />
      <Box bg="#f2f2f2" p={4} fontSize="0.85rem" >
        <Flex
          w="100%"
          maxW="1100px"
          mx="auto"
          gap={[5]}
          justify="center"
          wrap="wrap"
        >
          <Link href="#">Terms Of Use</Link>
          <Divider orientation="vertical" />
          <Link href="#">Privacy Policy</Link>
          <Divider orientation="vertical" />
          <Link href="#">Security Bug Report</Link>
          <Divider orientation="vertical" />
          <Link href="#">California Privacy Rights</Link>
          <Divider orientation="vertical" />
          <Link href="#">Do Not Sell My Personal Information (California)</Link>
          <Divider orientation="vertical" />
          <Link href="#"> Transparency in Supply Chains</Link>
          <Divider orientation="vertical" />
          <Link href="#">Ad Preferences</Link>
          <Divider orientation="vertical" />
        </Flex>
        <Flex justify='center' my={2} h='1rem'>
          <Text>
            © 2022 Bath & Body Works Direct, Inc. All Rights Reserved.
          </Text>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
