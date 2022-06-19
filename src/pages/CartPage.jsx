import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import Loading from '../components/Loading';
import {
  deleteCartItem,
  getCartItems,
  updateCartItem,
} from '../redux/cart/cartSlice';
const Wrapper = styled.div`
  .link-btn {
    border-radius: 0px;
    background-color: #333;
    color: white;
    font-size: 0.9rem;
    &:hover {
      background-color: #e8ebed;
      color: #333;
    }
  }

  .qty-controller button {
    border-radius: 0px;
  }

  .row {
    color: #333;
  }
  .frag-name,
  .prod-type {
    color: #444;
  }
  .frag-name {
    text-transform: uppercase;
    font-size: 0.9rem;
  }
  .prod-type {
    text-transform: capitalize;
    font-size: 0.8rem;
  }
  .old-price {
    text-decoration: line-through;
  }
  .price {
    color: #c42626;
  }
  .total-price {
    font-weight: 800;
  }
`;
function CartPage() {
  const navigate = useNavigate();
  const { cartItems, isLoading, error } = useSelector(store => store.cart);
  const dispatch = useDispatch();

  if (cartItems.length < 1) {
    return (
      <Box as={Wrapper}>
        {isLoading && <Loading />}
        <Button
          className=""
          variant="ghost"
          leftIcon={<HiOutlineArrowNarrowLeft />}
          onClick={() => navigate(-1)}
        >
          CONTINUE SHOPPING
        </Button>
        <Center h="65vh">
          <VStack spacing={'24px'}>
            <Heading color="#333" borderBottom={'1px solid #333'} pb={2}>
              Your Shopping Bag is Empty
            </Heading>
            <Button className="link-btn" mt={8} onClick={() => navigate(-1)}>
              CONTINUE SHOPPING
            </Button>
          </VStack>
        </Center>
      </Box>
    );
  }
  return (
    <Box as={Wrapper}>
      <Button
        variant="ghost"
        leftIcon={<HiOutlineArrowNarrowLeft />}
        onClick={() => navigate(-1)}
      >
        CONTINUE SHOPPING
      </Button>

      <Table>
        <Thead>
          <Tr className="theader">
            <Th w="350px">item</Th>
            <Th>price</Th>
            <Th>qty</Th>
            <Th>total price</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {cartItems?.map(item => (
            <CartItem item={item} />
          ))}
        </Tbody>
      </Table>

      <Flex my={8} justify="end">
        <BillAmount />
      </Flex>
    </Box>
  );
}

function Quantity({ id, qty }) {
  const dispatch = useDispatch();

  const handleCount = val => {
    if (qty + val < 1 || qty + val > 10) return;

    dispatch(updateCartItem({ cartItemId: id, quantity: qty + val })).then(() =>
      dispatch(getCartItems())
    );
  };
  return (
    <HStack className="qty-controller" spacing={'1px'}>
      <IconButton
        icon={<FiMinus color="black" />}
        onClick={() => handleCount(-1)}
      />
      <Center bg="gray.200" boxSize={'40px'} textAlign="center">
        {qty}
      </Center>
      <IconButton
        icon={<FiPlus color="black" />}
        onClick={() => handleCount(1)}
      />
    </HStack>
  );
}

function CartItem({ item }) {
  const { productId: product } = item;
  const dispatch = useDispatch();
  return (
    <Tr class="row">
      <Td>
        <HStack>
          <Image src={product.img} h="100px" />
          <VStack align={'start'}>
            <Text className="frag-name">{product.fragrance.name}</Text>
            <Text className="prod-type">{product.product_type}</Text>
          </VStack>
        </HStack>
      </Td>
      <Td>
        <VStack>
          <Text className="old-price">$ {product.old_price.toFixed(2)}</Text>
          <Text className="price">$ {product.price.toFixed(2)}</Text>
        </VStack>
      </Td>
      <Td>
        <Quantity qty={item.quantity} id={item._id} />
      </Td>
      <Td className="total-price">
        $ {Number(item.quantity * product.price).toFixed(2)}
      </Td>
      <Td>
        <IconButton
          icon={<AiOutlineClose />}
          bg="white"
          onClick={() =>
            dispatch(deleteCartItem(item._id)).then(() =>
              dispatch(getCartItems())
            )
          }
        />
      </Td>
    </Tr>
  );
}

function BillAmount() {
  const shippingCost = 10;
  const { amount: subtotal } = useSelector(store => store.cart);
  const total = subtotal * 1.18 + shippingCost;
  const navigate = useNavigate();
  return (
    <Box bg="#f2f2f2" py={4} px={8}>
      <Box>
        <HStack justify={'space-between'} w="400px" my={4} color="#444">
          <Text fontSize=".8rem">MERCHANDISE SUBTOTAL</Text>
          <Text>$ {subtotal.toFixed(2)}</Text>
        </HStack>
        <HStack justify={'space-between'} w="400px" my={4} color="#444">
          <Text fontSize=".8rem">ESTIMATED SHIPPING & HANDLING - Standard</Text>
          <Text>$ {shippingCost.toFixed(2)}</Text>
        </HStack>
        <HStack justify={'space-between'} w="400px" my={4} color="#444">
          <Text fontSize=".8rem">SALES TAX</Text>
          <Text>$ {Number(subtotal * 0.18).toFixed(2)}</Text>
        </HStack>
      </Box>
      <HStack
        justify={'space-between'}
        borderTop={'3px solid lightgrey'}
        w="100%"
        py={2}
        fontWeight={'bold'}
      >
        <Text>ORDER TOTAL (USD)</Text>
        <Text> $ {Number(total).toFixed(2)}</Text>
      </HStack>
      <Flex justify={'end'}>
        <Button
          color="white"
          fontSize=".92rem"
          letterSpacing={'2px'}
          px={10}
          _hover={{
            backgroundColor: '#ffffffc3',
            color: '#333',
          }}
          borderRadius="0px"
          textTransform={'uppercase'}
          bg="#008527"
          onClick={() => navigate('/checkout/shipping')}
        >
          Checkout
        </Button>
      </Flex>
    </Box>
  );
}
export default CartPage;
