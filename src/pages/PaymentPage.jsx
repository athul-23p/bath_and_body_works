import { Center, Progress, Box, Heading ,Button, VStack} from '@chakra-ui/react';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/cart/cartSlice';

function PaymentPage() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const timeRef = useRef(null);
  useEffect(() => {
    timeRef.current = setInterval(() => {
           setValue(prev => prev+10);
    },300);
    return  () => clearInterval(timeRef.current);
  },[])


  useEffect(() => {
     if (value === 100) {
       clearInterval(timeRef.current);
       dispatch(clearCart());
     }
  }, [value])
  return (
    <Center h="80vh">
      <Box>
        {value < 100 && (
          <Box>
            <Heading fontFamily={'monospace'}>Your Order is Being Placed...</Heading>
            <Progress isAnimated value={value} />
          </Box>
        )}
        {
            value === 100 && (<VStack>
                <Heading>Order placed Successfully</Heading>
                <Button colorScheme={'blackAlpha'} onClick={() => navigate('/')}>Go to Home</Button>
            </VStack>)          
        }
      </Box>
    </Center>
  );
}

export default PaymentPage;
