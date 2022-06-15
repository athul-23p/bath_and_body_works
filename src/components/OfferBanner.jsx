import { Box, Center, HStack, Text } from '@chakra-ui/react';

function OfferBanner() {
  return (
    <Center sx={{
        border:'1px solid'
    }}>
      <HStack  w='max-content' 
        sx={{'& p':{
            'color':'purple',
            fontWeight:"600"
        },
        background: 'white'
      }}>
        <Text fontSize={{base:'0.7rem',md:'0.9rem'}}>Today only!</Text>
        <Text fontSize={{base:'0.7rem',md:'1.4rem'}} textTransform='uppercase'>free shipping on $50 orders</Text>
        <Text fontSize={{base:'0.7rem',md:'0.9rem'}}>code : TREASURE</Text>
        <Text fontSize={'0.6rem'} textDecoration='underline' >DETAILS</Text>
      </HStack>
    </Center>
  );
}

export default OfferBanner;
