import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Spacer,
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';
import NavMenu from './NavMenu';
function Navbar() {
  return (
    <Box p={4}>
      <Flex gap={4} justify="flex-end" my={4}>
        <NavMenu  />
        <Spacer />
        <Heading  color={'purple.700'}>
          Bath & Body Works
        </Heading>
        <Spacer />
        <HStack justifySelf={'end'} spacing={'1.2rem'}>
          <InputGroup w="20vw" display={{ base: 'none', md: 'inline' }}>
            <Input placeholder="Search by fragrance or product" />
            <InputRightElement
              pointerEvents={'none'}
              children={<FiSearch color="purple" />}
            />
          </InputGroup>
          <Image
            boxSize={'35px'}
            display={{ base: 'none', md: 'inline' }}
            src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dwf6281149/images/svg-icons/UI-MyAccount.svg?yocs=o_s_"
          />
          <Image
            boxSize={'30px'}
            src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1655199971951/images/svg-icons/UI-AddToBag.svg?yocs=o_s_"
          />
        </HStack>
      </Flex>
      <Flex
        display={{ base: 'none', md: 'flex' }}
        justify={'space-around'}
        fontSize={['0.70rem', '0.75rem', '0.85rem', '0.9rem']}
        my={2}
      >
        <Link color="red.500" fontWeight="bold">
          ALL SALE
        </Link>
        <Link>BODY CARE</Link>
        <Link>CANDLE</Link>
        <Link>HOME FRAGRANCE</Link>
        <Link>HAND SOAPS & SANITIZERS</Link>
        <Link>MEN'S</Link>
        <Link>GIFTS</Link>
        <Link>BEST SELLERS</Link>
      </Flex>
    </Box>
  );
}

export default Navbar;
