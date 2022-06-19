import {
  Box,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Input,
  Text,
  Heading,
  Button
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartPreview from '../components/checkout/CartPreview';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setShippingAddress } from '../redux/orders/orderSlice';

const Wrapper = styled.div`
  .link {
    border-radius: 0px;
    background-color: #333;
    color: white;
    font-size: 0.9rem;
    &:hover {
      background-color: #e8ebed;
      color: #333;
    }
  }
`;
function Shipping() {
  const [formData, setFormData] = useState({
    first_name:"",
    last_name:"",
    address_1:"",
    address_2:"",
    country:"",
    city:"",
    state:"",
    zip_code:"",
    phone:"",
    shippng_method:""

  });
  const [inputErr, setInputErr] = useState(false);
  const navigate = useNavigate();
  const {user} = useSelector(store => store.auth);
  const {isLoading} = useSelector(store => store.orders);
  const dispatch = useDispatch();
  const handleChange = e => {
    const {name,value} = e.target;
    setFormData({...formData,[name]:value})
  };

  const handleGotoBilling = () => {
    for(let key in formData){
      if(formData[key] === ""){
       setInputErr(true);
         return;
       }
     

     if (inputErr) {
       setInputErr(false);
     }
  
      dispatch(setShippingAddress(formData)); 
      navigate('/checkout/billing');
    }
  }
  return (
    <Box as={Wrapper}>
      <Flex gap="10" justify={'space-between'} my={4}>
        <Box w="500px">
          <Box>
            <Heading>WELCOME BACK</Heading>
            <Heading color="purple">Hi,{user}!</Heading>
            <Text color="#444" fontSize={'.9rem'}>
              Thanks for logging in. We noticed we don't have a shipping address
              saved for you. Update and save below for faster checkout next
              time.
            </Text>
          </Box>
          <Box my={4}>
            <Heading>SHIPPING ADDRESS</Heading>
            <FormControl my={2}>
              <FormLabel htmlFor="first_name">First Name</FormLabel>
              <Input
                id="first_name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl my={2}>
              <FormLabel htmlFor="last_name">Last Name</FormLabel>
              <Input
                id="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
              />
            </FormControl>{' '}
            <FormControl my={2}>
              <FormLabel htmlFor="address_1">Address 1</FormLabel>
              <Input
                id="address_1"
                name="address_1"
                value={formData.address_1}
                onChange={handleChange}
              />
            </FormControl>{' '}
            <FormControl my={2}>
              <FormLabel htmlFor="address_2">Address 2</FormLabel>
              <Input
                id="address_2"
                name="address_2"
                value={formData.address_2}
                onChange={handleChange}
              />
            </FormControl>{' '}
            <FormControl my={2}>
              <FormLabel htmlFor="country">Country</FormLabel>
              <Input
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
              />
            </FormControl>{' '}
            <FormControl my={2}>
              <FormLabel htmlFor="city">City</FormLabel>
              <Input
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </FormControl>{' '}
            <FormControl my={2}>
              <FormLabel htmlFor="state">State</FormLabel>
              <Input
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
            </FormControl>{' '}
            <FormControl my={2}>
              <FormLabel htmlFor="zip_code">ZIP code</FormLabel>
              <Input
                id="zip_code"
                name="zip_code"
                value={formData.zip_code}
                onChange={handleChange}
              />
            </FormControl>{' '}
            <FormControl my={2}>
              <FormLabel htmlFor="phone">Phone</FormLabel>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </FormControl>{' '}
            <FormControl my={2}>
              <FormLabel htmlFor=""></FormLabel>
              <Checkbox id="save_to_addresses" name="save_to_addresses">
                Save to Addresses
              </Checkbox>
            </FormControl>{' '}
            <FormControl my={2}>
              <FormLabel htmlFor=""></FormLabel>
              <Checkbox id="address_for_billing" name="address_for_billing">
                Use Address for Billing
              </Checkbox>
            </FormControl>{' '}
            <FormControl my={2}>
              <FormLabel htmlFor="">Are you shipping a gift ?</FormLabel>
              <RadioGroup>
                <Radio name="is_a_gift" value="true">
                  Yes
                </Radio>
                <Radio name="is_a_gift" value="false">
                  No
                </Radio>
              </RadioGroup>
            </FormControl>{' '}
          </Box>
          <Box>
            <Heading>SHIPPING METHOD</Heading>
            <RadioGroup defaultValue="standard">
              <Stack>
                <Box>
                  <Radio name="shipping_method" value="standard">
                    Standard <span>3-7 business days</span>
                  </Radio>
                  <Text>$10.99</Text>
                </Box>
                <Box>
                  <Radio name="shipping_method" value="expedited">
                    Expedited <span>2 business days</span>
                  </Radio>
                  <Text>$19.99</Text>
                </Box>
                <Box>
                  <Radio name="shipping_method" value="overnight">
                    Overnight <span>1 business day</span>
                  </Radio>
                  <Text>$24.99</Text>
                </Box>
              </Stack>
            </RadioGroup>
          </Box>
          <Button onClick={handleGotoBilling} className="link" my={4} isLoading={isLoading}>
            GO TO BILLING
          </Button>
          {/* {error && <Text>{error}</Text>} */}
          {inputErr && <Text color='red.600'>Please fill all fields</Text>}
        </Box>
        <CartPreview />
      </Flex>
    </Box>
  );
}


export default Shipping;