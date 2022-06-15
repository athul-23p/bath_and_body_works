import { Box, Image, Text } from "@chakra-ui/react";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react';
function Promo(){

    return (
      <Box>
        <Image
          display={{ base: 'block', md: 'none' }}
          w="100%"
          src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw974518a8/images/Summer2022/xcat_evergreen_junsas_mhm.jpg?yocs=o_s_"
        />
        <Image
          display={{ base: 'none', md: 'block' }}
          src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwb47733aa/images/Summer2022/xcat_evergreen_junsas_hm.jpg?yocs=s_"
        />

        <Popover>
          <PopoverTrigger>
            <Text textAlign={'center'} textDecoration="underline">
              Promo Details
            </Text>
          </PopoverTrigger>
          <PopoverContent>
            
            <PopoverCloseButton />
            <PopoverHeader>Promo Details</PopoverHeader>
            <PopoverBody >
              <Text fontWeight="bold">
                Offers valid at participating U.S. Bath & Body Works stores and
                BathandBodyWorks.com through the dates below:
              </Text>
              <Text mt={4}>
                Semi-Annual Sale valid in stores and online on June 11, 2022 at
                6:00 AM ET to July 11, 2022 at 5:59 AM ET. While supplies last.
                Product assortment and availability may differ significantly
                between stores and the website. Sale pricing, offers and
                promotions offered in store and online may vary. All pricing,
                promotions, and product availability are subject to change.
              </Text>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
    );
}




export default Promo;