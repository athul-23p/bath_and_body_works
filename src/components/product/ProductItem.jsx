import styled from 'styled-components';

import { Box, Flex, Image, Text, HStack, Button } from '@chakra-ui/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addCartItem } from '../../redux/cart/cartSlice';

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


function ProductItem({product}){

  const navigate = useNavigate();
  const {isAuth} = useSelector(store => store.auth);
  const {isLoading,error,cartItems} = useSelector(store => store.cart);
  const location = useLocation();
  const dispatch = useDispatch();
  // console.log(location);

    const handleAddtoCart = (e) => {
      e.stopPropagation();

      if(!isAuth){
        navigate('/sign-in',{state:{from:location.pathname}});
        return;
      }

      if(cartItems.find(el => el._id === product._id)){
        // increase quantity by 1
      }
      else{
        // add item to cart;
        dispatch(addCartItem({product,quantity:1}));
      }
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



