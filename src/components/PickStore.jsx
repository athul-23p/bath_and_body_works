import { Box, Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import {GrLocation} from 'react-icons/gr'

function PickStore(){


    return (
      <Flex display={{base:"none",md:"flex"}} justify={'end'}  bg="#f2f2f2" align={'center'} px={4}>
        <HStack>
          <GrLocation/>
          <Text color={'purple.800'} fontSize='0.78rem' fontWeight='bold' letterSpacing={2}>PICK UP IN STORE</Text>
          <Button fontSize='0.8rem' fontWeight='100' textDecoration={'underline'} variant={'ghost'} px={0}>Set store</Button>
        </HStack>
      </Flex>
    );
}


export default PickStore;