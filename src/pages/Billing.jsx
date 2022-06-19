import { Box, Flex, FormControl, FormLabel, Heading , Text, Input, Button, FormHelperText, RadioGroup, Radio, Image, HStack, Stack, Select} from '@chakra-ui/react';
import { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import CartPreview from '../components/checkout/CartPreview';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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
const promo ='';

const months = ['january','febraury','march','april','may','june','july','august','september','october','novemeber','december']

const years = getYears(2022,2036);

function getYears(from,to){
    let years = new Array(to-from+1);
    for(let i = from ,j=0; i<=to;i++,j++){
        years[j] = i;
    }
    return years;
}
function Billing() {
  const [email, setEmail] = useState('');
  const [inputErr,setInputErr] = useState(false);
  const [promoCode,setPromoCode] = useState('');
  const [cardDetails,setCardDetails] = useState({
    name:"",
    number:"",
    expiry_month:"",
    expiry_year:"",
    cvv:""
  });
  const navigate = useNavigate();
  const handleCardDetails = (e) => {
    const {name,value} = e.target;
    setCardDetails({...cardDetails,[name]:value});
  }
   const {shippingAddress} = useSelector(store => store.orders);
   
  const makePayment = () => {

    console.log(cardDetails);
    if(email === ""){
      setInputErr(true);
      return;
    }

    for(let key in cardDetails){
      if(cardDetails[key] === ""){
       setInputErr(true);
         return;
       }
    }

     if (inputErr) {
       setInputErr(false);
     }
  
     navigate('/payment');
  }

  const applyPromoCode = () => {}
  return (
    <Box w="fit-content" mx="auto" as={Wrapper}>
      <Box></Box>
      <Flex gap="5vw" justify={'space-between'}>
        <Box w="500px">
          <Box>
            <Heading>Billing Address</Heading>
            <Box border="1px solid lightgrey" p={4}>
              <Text>
                {' '}
                {shippingAddress.first_name} {shippingAddress.last_name}
              </Text>
              <Text> {shippingAddress.address_1}</Text>
              <Text> {shippingAddress.address_2}</Text>
              <Text>
                {' '}
                {shippingAddress.state}, {shippingAddress.zip_code}
              </Text>
              <Text> {shippingAddress.country}</Text>
              <Text> {shippingAddress.phone}</Text>
            </Box>
          </Box>

          <Box my={4}>
            <Heading>Contact Information</Heading>
            <FormControl isRequired>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input value={email} onChange={e => setEmail(e.target.value)} />
            </FormControl>
          </Box>

          <Box>
            <Accordion>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      PROMOTION CODE
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <FormControl isRequired>
                    <FormLabel htmlFor="promoCode">Promotion Code</FormLabel>
                    <Flex>
                      <Input
                        value={promoCode}
                        onChange={e => setPromoCode(e.target.value)}
                      />
                      <Button onClick={applyPromoCode}>Apply</Button>
                    </Flex>
                    <FormHelperText>
                      Only one promotion code can be applied per order. You can
                      submit a different code by entering it in the field above
                      and clicking apply.
                    </FormHelperText>
                  </FormControl>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          <Box my={4}>
            <Heading>PAYMENT METHOD</Heading>
            <RadioGroup value='credit_card'>
              <Flex>
                <HStack>
                  <Radio name='payment_method' value="credit_card">Credit Card</Radio>
                  <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dwa46f619c/images/cc-strap-updated-4-4.png?yocs=o_s_" />
                </HStack>
              </Flex>
            </RadioGroup>
            <FormControl isRequired>
              <FormLabel htmlFor="name">Name on Card</FormLabel>
              <Input
                id="name"
                name="name"
                value={cardDetails.name}
                onChange={handleCardDetails}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="number">Number</FormLabel>
              <Input
                id="number"
                name="number"
                value={cardDetails.number}
                onChange={handleCardDetails}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Expiration Date</FormLabel>
              <Stack direction={'row'}>
                <Select
                  name="expiry_month"
                  placholder="Month"
                  w="max-content"
                  textTransform={'capitalize'} onChange={handleCardDetails}
                >
                  {months.map(month => (
                    <option value={month}>{month}</option>
                  ))}
                </Select>
                <Select w="max-content" name='expiry_year' placeholder="Year" onChange={handleCardDetails}>
                  {years.map(year => (
                    <option value={year}>{year}</option>
                  ))}
                </Select>
              </Stack>
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="cvv">Security Code</FormLabel>
              <Input
                id="cvv"
                name="cvv"
                value={cardDetails.cvv}
                onChange={handleCardDetails}
              />
            </FormControl>
            <Button className="link" my={4} onClick={makePayment}>
              {' '}
              Make Payment
            </Button>
            {inputErr && <Text color="red.600">Please fill all fields</Text>}
          </Box>
        </Box>
        <CartPreview />
      </Flex>
    </Box>
  );
}



export default Billing;
