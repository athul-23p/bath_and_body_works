import styled from 'styled-components';

import { Box, Flex, Image, Text, HStack, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
   padding:1rem;
   text-align: center;
  .fragrance {
    color: #464444;
    font-size: 1.1rem;
    font-weight: bold;
    text-transform: capitalize;
  }
  .product_type {
    color: grey;
    text-transform: capitalize;
    font-size: .8rem;
  }
  .old_price {
    color: grey;
    text-decoration: line-through;
  }
  .price {
    font-weight: bold;
    color: #d30707;
  }
  .btn {
    background-color: #333;
    color: white;
    font-size: 0.9rem;
    border-radius: 0px;
    text-transform: uppercase;
    width:100%;
    letter-spacing: 1px;
    &:hover {
      background-color: #e8ebed;
      color: #333;
    }
  }
`;

//   const product = {
//     fragrance: { name: 'cucumber & lily', type: 'floral' },

//     product_type: 'shea butter cleansing bar',
//     rating: {
//       rate: 4.6,
//       count: 48,
//     },
//     img: 'https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwbe4f9291/hires/026394011.jpg?sh=471&yocs=o_s_',
//     section: 'body care',
//     qty: 40,
//     size: '5 oz / 141g',
//     old_price: 8.5,
//     price: 2.13,
//   };
function ProductItem({product}){

  const navigate = useNavigate();

    const handleAddtoCart = (e) => {
      e.stopPropagation();
    }
    return (
      <Flex as={Wrapper} direction="column" align={'center'} 
        onClick={() => navigate(`/product/${product._id}`)}
      >
        <Image src={product.img} />
        <Text className='fragrance' objectFit={'cover'}>
          {product.fragrance.name}
        </Text>
        <Text className='product_type'>{product.product_type}</Text>
        <HStack my={4}>
            <Text className='old_price'>$ {product.old_price.toFixed(2)}</Text>
            <Text className='price'>$ {product.price.toFixed(2)}</Text>
        </HStack>
        <Button className='btn' onClick={handleAddtoCart}>Add to bag</Button>
      </Flex>
    );
}

export default ProductItem;



