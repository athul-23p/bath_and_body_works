import { Box, Button, Divider, FormControl, FormHelperText, FormLabel, Image, Input, Text, VStack } from "@chakra-ui/react";
import { useState } from 'react';

function SignUp(){
    const [formData,setFormData] = useState({
        first_name:"",
        last_name:"",
        email:"",
        confirm_email:"",
        zip_code:"",
        phone:"",
        password:""
    });

    const handleChange = (e) => {
        const {id,value} = e.target;
        setFormData({...formData,[id]:value});
    }

    const handleSignUp = () => {

    }
    return (
      <Box p={4}>
        <Image
          src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw6f07f823/images/banners/create-account_d.png?yocs=s_"
          my={4}
        />
        <Text fontSize="1.3rem" borderBottom="2px solid" py={3}>
          Create an Account
        </Text>
        <VStack
          w={{ base: '100%', md: '360px' }}
          my="4"
          mx="auto"
          spacing={'32px'}
        >
          <FormControl isRequired>
            <FormLabel htmlFor="first_name">First Name</FormLabel>
            <Input
              id="first_name"
              onChange={handleChange}
              value={formData.first_name}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="last_name">Last Name</FormLabel>
            <Input
              id="last_name"
              onChange={handleChange}
              value={formData.last_name}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" onChange={handleChange} value={formData.email} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="confirm_email">Confirm Email</FormLabel>
            <Input
              id="confirm_email"
              onChange={handleChange}
              value={formData.confirm_email}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="zip_code">ZIP/Postal Code</FormLabel>
            <Input
              id="zip_code"
              onChange={handleChange}
              value={formData.zip_code}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="phone">Phone</FormLabel>
            <Input id="phone" onChange={handleChange} value={formData.phone} />
            <FormHelperText>
              We'll use this to look up your Reward account in stores.
            </FormHelperText>
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              type="password"
              onChange={handleChange}
              value={formData.password}
            />
          </FormControl>
          <Button>CREATE ACCOUNT</Button>
          <Box textAlign={'center'}>
          <Text>Questions?</Text>
          <Text>We’re here for you! Call us at 1-800-756-5005.</Text>
          </Box>
        </VStack>
      </Box>
    );
}

export default SignUp;