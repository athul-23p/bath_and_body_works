import { Box, Flex, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

function CartPreview() {
  const shippingCost = Number(10);

  const {cartItems:cart,amount:subTotal} = useSelector(store => store.cart);
  
  
  const total = subTotal * 1.18 + shippingCost;
  return (
    <VStack spacing={'32px'} border="1px solid lightgrey" p={4} h="fit-content">
      <Text
        fontSize="1rem"
        color="#666"
        textAlign={'center'}
        borderBottom={'3px solid lightgrey'}
        w="100%"
      >
        {' '}
        YOUR ORDER
      </Text>
      <Flex
        borderBottom={'3px solid lightgrey'}
        direction="column"
        gap={8}
        p={4}
      >
        {cart?.map(item => (
          <CartItem item={item} />
        ))}
      </Flex>
      <Box>
        <HStack justify={'space-between'}>
          <Text w="22ch" fontSize=".9rem">
            MERCHANDISE SUBTOTAL
          </Text>
          <Text>$ {subTotal.toFixed(2)}</Text>
        </HStack>
        <HStack justify={'space-between'}>
          <Text w="22ch" fontSize=".9rem">
            ESTIMATED SHIPPING & HANDLING - Standard
          </Text>
          <Text>$ {shippingCost.toFixed(2)}</Text>
        </HStack>
        <HStack justify={'space-between'}>
          <Text w="22ch" fontSize=".9rem">
            SALES TAX
          </Text>
          <Text>$ {Number(subTotal * 0.18).toFixed(2)}</Text>
        </HStack>
      </Box>
      <HStack
        justify={'space-between'}
        borderTop={'3px solid lightgrey'}
        w="100%"
        py={2}
        fontWeight={'bold'}
      >
        <Text>ORDER TOTAL</Text>
        <Text> $ {Number(total).toFixed(2)}</Text>
      </HStack>
    </VStack>
  );
}

function CartItem({ item }) {

  const product = item.productId;
 
  return (
    <Flex justify={'start'} >
      <Image src={product.img} h="90px" />
      <Box>
        <Text textTransform={'uppercase'}>{product.fragrance.name}</Text>
        <Text fontSize=".75rem" color="gray.600" textTransform={'capitalize'}>
          {product.product_type}
        </Text>
        <Text fontSize=".75rem" color="gray.600">
          Size: {product.size}
        </Text>
        <Flex justify={'space-between'} >
          <Text fontSize=".75rem" color="gray.600">
            Qty : {item.quantity}
          </Text>
          <Text fontSize=".8rem"> $ {product.price}</Text>
        </Flex>
      </Box>
    </Flex>
  );
}

export default CartPreview;
