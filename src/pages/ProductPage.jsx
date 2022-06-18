import {
  Box,
  Button,
  Center,
  Checkbox,
  Divider,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FiTruck, FiMinus, FiPlus, FiStar } from 'react-icons/fi';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProduct } from '../redux/products/productSlice';
import { useParams } from 'react-router-dom';

const Wrapper = styled.div`
  .cart-controller {
    justify-content: start;
  }

  .cart-controller * {
    border-radius: 0px;
    margin: 1px;
  }

  .btn {
    background-color: #333;
    color: white;
    font-size: 0.9rem;
    &:hover {
      background-color: #e8ebed;
      color: #333;
    }
  }
`;

function ProductPage() {
  const [count, setCount] = useState(1);
 const {isLoading,current,error} = useSelector(store => store.products);
const {id} = useParams();
 const dispatch = useDispatch();

 useEffect(() => {
    dispatch(fetchProduct(id));
 },[])

  const handleCount = val => {
    if (val + count < 1) return;
    if (val + count > 10) return;
    setCount(count + val);
  };

  
  return (
    <Flex
      as={Wrapper}
      direction={{ base: 'column', md: 'row' }}
      align="center"
      mx="auto"
      justify={'center'}
      gap={8}
    >
      <Image src={current?.img} w="400px" />
      <Box w="400px" spacing="24px">
        <Box textTransform={'capitalize'} my={3}>
          <Heading
            fontWeight="light"
            fontSize={'1.45rem'}
            textTransform="uppercase"
          >
            {current?.fragrance?.name}
          </Heading>
          <Text>{current?.product_type}</Text>
        </Box>

        <Box display={'flex'} alignItems='center' gap={2}>
          <FiStar/> {current?.rating?.rate} ({current?.rating?.count}){' '}
        </Box>
        <HStack fontWeight={'bold'}>
          <Text textDecoration={'line-through'}>
            $ {current?.old_price?.toFixed(2)}
          </Text>
          <Text color="red.600"> Now $ {current?.price?.toFixed(2)}</Text>
        </HStack>
        <Text color="gray.600">{current?.size}</Text>
        <Divider colorScheme={'grey'} my={6} />
        <Box fontSize={'.9rem'}>
          <Text fontWeight={'bold'}>How do you want to receive it ?</Text>
          <Checkbox isChecked>
            {' '}
            <HStack>
              <FiTruck />
              <Text fontWeight={'bold'}>Ship it</Text>
            </HStack>
          </Checkbox>
          <Text my={2} color="gray.600">
            Availiable
          </Text>
          <Text my={2} color="gray.600" fontWeight={'bold'}>
            Not eligible for Pick Up in Store
          </Text>
        </Box>
        <Divider colorScheme={'grey'} my={6} />
        <Box>
          <HStack className="cart-controller">
            <IconButton
              icon={<FiMinus color="black" onClick={() => handleCount(-1)} />}
            />
            <Center bg="gray.200" boxSize={'40px'} textAlign="center">
              {count}
            </Center>
            <IconButton
              icon={<FiPlus color="black" onClick={() => handleCount(1)} />}
            />
            <Button className="btn">ADD TO BAG</Button>
          </HStack>
        </Box>
      </Box>
    </Flex>
  );
}

export default ProductPage;
