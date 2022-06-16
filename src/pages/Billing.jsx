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
  const [promoCode,setPromoCode] = useState('');
  const [cardDetails,setCardDetails] = useState({
    name:"",
    number:"",
    expiry_month:"",
    expiry_year:"",
    cvv:""
  });

  const handleCardDetails = (e) => {
    const {name,value} = e.target;
    setCardDetails({...cardDetails,[name]:value});
  }

  const gotoReviewAndOrder = () => {}

  const applyPromoCode = () => {}
  return (
    <Box>
      <Box></Box>
      <Flex>
        <Box>
          <Box>
            <Heading>Billing Address</Heading>
            <Box border="1px solid grey" p={4}>
              <Text> firstname lastname</Text>
              <Text> address_1</Text>
              <Text> address_2</Text>
              <Text> state, zip code</Text>
              <Text> country</Text>
              <Text> phone phone no</Text>
            </Box>
          </Box>

          <Box m={4}>
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
          <Box>
            <Heading>PAYMENT METHOD</Heading>
            <RadioGroup>
                <Flex>
                    <HStack>
                        <Radio value='credit_card'>Credit Card</Radio>
                        <Image src='https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dwa46f619c/images/cc-strap-updated-4-4.png?yocs=o_s_'/>
                    </HStack>
                </Flex>
            </RadioGroup>
            <FormControl isRequired>
                <FormLabel htmlFor='name'>Name on Card</FormLabel>
                <Input id='name' name='name' value={cardDetails.name}  onChange={handleCardDetails} />
            </FormControl>
            <FormControl isRequired>
                <FormLabel htmlFor='number'>Number</FormLabel>
                <Input id='number' name='number' value={cardDetails.number}  onChange={handleCardDetails}/>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Expiration Date</FormLabel>
                <Stack direction={'row'}>
                    <Select name='expiry_month' placholder='Month' w='max-content' textTransform={'capitalize'}>
                       { months.map(month => <option value={month} >{month}</option>)}
                    </Select>
                    <Select w='max-content' placeholder='Year'>
                        { years.map(year => <option value={year}>{year}</option>)}
                    </Select>
                </Stack>
            </FormControl>
            <FormControl isRequired>
                <FormLabel htmlFor='cvv'>Security Code</FormLabel>
                <Input id='cvv' name='cvv' value={cardDetails.cvv} onChange={handleCardDetails} />
            </FormControl>
            <Button> REVIEW ORDER</Button>
          </Box>
        </Box>
        <CartPreview/>
      </Flex>
    </Box>
  );
}

export default Billing;
