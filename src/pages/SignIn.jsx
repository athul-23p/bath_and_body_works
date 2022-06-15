import { Box, Button, Center, Divider, FormControl, FormLabel, Image, Input, Stack, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

function SignIn(){
    const [formData,setFormData] = useState({email:"",password:""});
    const handleChange = (e) => {
        const {id,value} = e.target;
        setFormData({...formData,[id]:value});
    } 
    return (
      <Box w="85%" mx="auto">
        <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw67bc4699/images/banners/sign-in_d.png?yocs=s_" />
        <Box>
          <Text borderBottom={'1px solid'}>Sign In or Sign Up</Text>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            justify="space-around"
          >
            <Box>
              <Text textAlign={'center'}>SIGN IN</Text>
              <Text>If you already have an accoun with us, sign in below</Text>
              <FormControl>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input id="email"  onChange={handleChange} value={formData.email}/>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input type="password" id="password" onChange={handleChange} value={formData.password} />
              </FormControl>
              <Center m={2}>
                <Button>SIGN IN</Button>
              </Center>
            </Box>
            <Box alignSelf="center">
              {/* <Divider
                h="2px"
                zIndex={'-1'}
                bg={'black'}
                position="relative"
                top="1.3rem"
                orientation={{base:'horizontal',md:'vertical'}}
                transform={['rotate(180deg)']}
              /> */}
              <Text
                bg="white"
                border="1px solid"
                borderRadius={'full'}
                w="fit-content"
                p={2}
                // position='relative'
                // left='4rem'
              >
                OR
              </Text>
            </Box>
            <VStack>
              <Text textTransform={'uppercase'} fontSize="1.2rem">
                sign up
              </Text>
              <Text>
                Create an account to access the best of your favorite store
              </Text>
              <Image
                src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwf946a6ac/images/loyalty/July19/nonloyalty_5thmkt_signuptile_D.png?yocs=s_"
                w="400px"
              />
              <Button>CREATE AN ACCOUNT</Button>
            </VStack>
          </Stack>
        </Box>
      </Box>
    );
}

export default SignIn;