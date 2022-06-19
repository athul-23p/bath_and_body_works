import {
  Box,
  Divider,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import NewsLetter from './NewsLetter';

const customerCare = [
  'Help & FAQs',
  'Shipping',
  'Returns & Exchanges',
  'Order Tracking',
  'Corporate Sales & Gifts',
  'Contact Us',
];
const myAccount = [
  'Sign In or Sign Up',
  'Order Tracking',
  'My Auto Refresh',
  'My Love-It List',
];
const discover = [
  'About Us',
  'Careers',
  'Gift Cards',
  'Shop by Fragrance',
  'Product Ingredients',
  'Get Inspired',
  'Diversity, Equity & Inclucsion',
];
const connected = [
  {
    img: 'https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1655199971951/images/svg-icons/Social-fb-reverse.svg?yocs=o_s_',
    to: 'https://www.facebook.com/bathandbodyworks',
  },
  {
    img: 'https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1655199971951/images/svg-icons/Social-twitter-reverse.svg?yocs=o_s_',
    to: 'https://twitter.com/bathbodyworks',
  },
  {
    img: 'https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1655199971951/images/svg-icons/Social-ig-reverse.svg?yocs=o_s_',
    to: 'https://www.instagram.com/bathandbodyworks/',
  },
  {
    img: 'https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1655199971951/images/svg-icons/Social-tiktok-reverse.svg?yocs=o_s_',
    to: 'https://www.tiktok.com/@bathandbodyworks',
  },
  
  {
    img: 'https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1655199971951/images/svg-icons/Social-youtube-reverse.svg?yocs=o_s_',
    to: 'https://www.youtube.com/user/bathandbodyworks/',
  },
  {
    img: 'https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1655199971951/images/svg-icons/Social-pinterest-reverse.svg?yocs=o_s_',
    to: 'https://www.pinterest.com/bathbodyworks/',
  },
];
const findUs = ['Store Locatior', 'Global Locations'];
function Footer() {
  return (
    <Box
      fontSize={'0.8rem'}
      my={4}
      mx="auto"
      pt={8}
      borderTop="4px solid lightgrey"
    >
      <Box w="100%" maxW="1100px" mx="auto">
        <Flex>
          <Box>
            <NewsLetter />
            <Box m={4}>
              <Text>GET CONNECTED</Text>
              <HStack my={2}>
                {connected.map(link => (
                  <IconButton
                    as="a"
                    href={link.to}
                    icon={
                      <Image
                        src={link.img}
                        boxSize="40px"
                        objectFit={'cover'}
                        bg="grey"
                        borderRadius={'full'}
                      />
                    }
                  />
                ))}
              </HStack>
            </Box>
          </Box>
          <Box>
            <Flex wrap={'wrap'} justify="end">
              <VStack align={'start'} m={4}>
                <Text fontWeight="bold">CUSTOMARE CARE</Text>
                {customerCare.map(item => (
                  <Link to="/" _hover={{ color: 'purple' }}>
                    {item}
                  </Link>
                ))}
              </VStack>
              <VStack align={'start'} m={4}>
                <Text fontWeight="bold">MY ACCOUNT</Text>
                {myAccount.map(item => (
                  <Link to="/" _hover={{ color: 'purple' }}>
                    {item}
                  </Link>
                ))}
              </VStack>
              <VStack align={'start'} m={4}>
                <Text fontWeight="bold">DISCOVER</Text>
                {discover.map(item => (
                  <Link to="/" _hover={{ color: 'purple' }}>
                    {item}
                  </Link>
                ))}
              </VStack>
              <VStack align={'start'} m={4} justifySelf="end">
                <Text fontWeight="bold">FIND US</Text>
                {findUs.map(item => (
                  <Link to="/" _hover={{ color: 'purple' }}>
                    {item}
                  </Link>
                ))}
              </VStack>
            </Flex>
            <Flex justify={'end'} my={2}>
              <Image
                src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw0c8e6af7/images/evergreen/Happiness_Guaranteedtimes2_v2.jpg?yocs=o_s_"
                h={['60px']}
              />
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Footer;
