import { useDispatch, useSelector } from 'react-redux';

import {
  Flex,
  Box,
  Text,
  VStack,
  Checkbox,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  useDisclosure,
  Select,
} from '@chakra-ui/react';
import styled from 'styled-components';
import { BsChevronDown } from 'react-icons/bs';

const Wrapper = styled.div`
  .accrd_panel {
    height: 400px;
    overflow-y: scroll;
  }
`;
function FilterComponent() {
  const dispatch = useDispatch();
  const { data } = useSelector(store => store.products);
  const product_types = [
    ...new Set(data?.map(product => product['product_type'])),
  ];
  const frag_names = [
    ...new Set(data?.map(product => product.fragrance['name'])),
  ];
  const frag_categories = [
    ...new Set(data?.map(product => product.fragrance['type'])),
  ];

  return (
    <Flex align={'start'} gap="8" my={4}>
      <Box
        display={'flex'}
        gap="3"
        alignItems="center"
        p={2}
        fontSize=".9rem"
        bg="#e8ebed"
      >
        <Text fontWeight={'bold'}>Filter By:</Text>
        <ProductType types={product_types} />
        <FragranceName names={frag_names} />
        <FragranceCategories categories={frag_categories} />
      </Box>
      <Select
        placeholder="Sort By"
        w="25ch"
        outline={'none'}
        border="none"
        // borderBottom={'5px solid'}
        borderRadius="0px"
        mt="2"
      >
        <option value="PL2H">Price Low to High</option>
        <option value="PH2L">Price High to Low</option>
        <option value="rating">Rating</option>
      </Select>
    </Flex>
  );
}

function ProductType({ types }) {
  return (
    <Menu>
      <MenuButton
        as={Button}
        w="220px"
        bg="#e8ebed"
        rightIcon={<BsChevronDown />}
      >
        Product Type
      </MenuButton>
      <MenuList p={2}>
        <VStack align="start">
          {types?.map(el => (
            <Checkbox
              name="product_type"
              textTransform={'capitalize'}
              value={el}
            >
              {el}
            </Checkbox>
          ))}
        </VStack>
      </MenuList>
    </Menu>
  );
}
function FragranceName({ names }) {
  return (
    <Menu>
      <MenuButton
        as={Button}
        w="220px"
        bg="#e8ebed"
        rightIcon={<BsChevronDown />}
      >
        Fragrance Name
      </MenuButton>
      <MenuList p={2} h='350px' overflowY={'scroll'}>
        <VStack align="start">
          {names?.map(el => (
            <Checkbox
              name="fragrance_names"
              textTransform={'capitalize'}
              value={el}
            >
              {el}
            </Checkbox>
          ))}
        </VStack>
      </MenuList>
    </Menu>
  );
}

function FragranceCategories({ categories }) {
  return (
    <Menu>
      <MenuButton
        as={Button}
        w="220px"
        bg="#e8ebed"
        rightIcon={<BsChevronDown />}
      >
        Fragrance Category
      </MenuButton>
      <MenuList p={2}>
        <VStack align="start">
          {categories?.map(el => (
            <Checkbox
              name="fragrance_names"
              textTransform={'capitalize'}
              value={el}
            >
              {el}
            </Checkbox>
          ))}
        </VStack>
      </MenuList>
    </Menu>
  );
}
export default FilterComponent;
