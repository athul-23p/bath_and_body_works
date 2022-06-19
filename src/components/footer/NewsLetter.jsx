import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';

function NewsLetter() {
  return (
    <Box m={4}>
      <form>
        <Text>Get email offers & the latest news from Bath & Body Works!</Text>
        <FormControl>
          <FormLabel htmlFor="subscribe_email">Enter Email</FormLabel>
          <Input borderRadius={'none'} id="subscribe_email" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="subscribe_confirm">Confirm Email</FormLabel>
          <Flex>
            <Input borderRadius={'none'} id="subscribe_confirm" />
            <Button
              borderRadius={'none'}
              bg="blackAlpha.800"
              textTransform={'uppercase'}
              color="white"
              type="submit"
              fontSize={'0.8rem'}
            >Submit</Button>
          </Flex>
        </FormControl>
      </form>
    </Box>
  );
}

export default NewsLetter;
