import { Link, Text, Box } from '@chakra-ui/react';

import styled from 'styled-components';
const Wrapper = styled.div`
  text-align: center;
  background-color: white;
  margin: 10px;
  padding: 3rem 0rem;

  .link {
    display: inline-block;
    background-color: #333;
    color: white;
    padding: 0.8rem;
    width: 12rem;
    font-weight: 700;
    margin-top: 1rem;
  }

  .link:hover {
    background-color: #e8ebed;
    color:#000000;
    text-decoration: none;
  }
`;
function OfferBox({ text, offer, extra, link }) {
  return (
    <Box as={Wrapper} className="offerBox" w={{base:"250px"}} >
      
        <Text h='1.8rem' color="purple.700" fontWeight="bold">
          {extra}
        </Text>
      
      <Text fontSize={'.9rem'}>{text}</Text>
      <Text fontWeight={'bold'} fontSize='1.1rem'>{offer}</Text>
      <Link className='link'>SHOP</Link>
    </Box>
  );
}

export default OfferBox;
