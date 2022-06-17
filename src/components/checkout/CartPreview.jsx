import { Box, Flex, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';

function CartPreview() {
  const shippingCost = Number(10);


  const cart = [
    {
      fragrance: 'coconut pineapple',
      product_type: 'fine fragrance mist',
      size: '8fl oz / 236 mL',
      qty: 1,
      price: '8.25',
      img: 'https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw48b05490/hires/026477886.jpg?sw=177&yocs=o_s_',
    },
    {
      fragrance: 'cocunut pineapple',
      product_type: 'shower gel',
      size: '8fl oz / 236 mL',
      qty: 1,
      price: '8.25',
      img: 'https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw82895fb4/hires/026477857.jpg?sw=177&yocs=o_s_',
    },
  ];

  const subTotal = cart.reduce((acc, cur) => acc + cur.qty * cur.price, 0).toFixed(2);
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
          <Text>$ {subTotal}</Text>
        </HStack>
        <HStack justify={'space-between'}>
          <Text w="22ch" fontSize=".9rem">
            ESTIMATED SHIPPING & HANDLING - _standard_
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
  return (
    <Flex justify={'space-around'}>
      <Image src={item.img} h="90px" />
      <Box>
        <Text textTransform={'uppercase'}>{item.fragrance}</Text>
        <Text fontSize=".75rem" color="gray.600" textTransform={'capitalize'}>
          {item.product_type}
        </Text>
        <Text fontSize=".75rem" color="gray.600">
          Size: {item.size}
        </Text>
        <Flex justify={'space-between'}>
          <Text fontSize=".75rem" color="gray.600">
            Qty : {item.qty}
          </Text>
          <Text fontSize=".8rem"> $ {item.price}</Text>
        </Flex>
      </Box>
    </Flex>
  );
}

export default CartPreview;
