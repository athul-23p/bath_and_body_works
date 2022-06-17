import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import Promo from '../components/home/Promo';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components'
import OfferBox from '../components/home/OfferBox';
const Wrapper = styled.div`
    .gifts-button-group{
        display:grid;
        grid-template-columns: repeat(2,1fr);
        grid-auto-rows: 40px;
        gap:20px;
        text-transform: uppercase;
        font-weight: 800;
        font-size: 1rem;
        text-align: center;
        margin-top: 2rem;
        
    }
    .gifts-button-group a{
        background-color: #333;
        color:white;
        box-sizing: border-box;
        padding:0.9rem;
        text-decoration: none;
    }
    .gifts-button-group a:hover{
        color:#000;
        background-color: #e7e7e7;
    }

    @media (min-width: 992px) { 
        .gifts-button-group{
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }
        .gifts-button-group a{
            padding: 0.5rem 2rem;
            height: 40px;
        }
     }
`;

const categories = [
  {
    img: 'https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw6c17f327/images/JuneSAS2022/bc_bfs_junsas_vn.jpg?yocs=o_s_',
    name: 'Body Care',
  },
  {
    img: 'https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw17d09c85/images/JuneSAS2022/cndl_bfs_junsas_vn.jpg?yocs=o_s_',
    name: 'Candles',
  },
  {
    img: 'https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw879d9238/images/JuneSAS2022/diff_distressed_junsas_vn.jpg?yocs=o_s_',
    name: 'Wallflowers',
  },
  {
    img: 'https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw5d9dcf2e/images/JuneSAS2022/sp_bfs_junsas_vn.jpg?yocs=o_s_',
    name: 'Hand Soaps',
  },
  {
    img: 'https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwd960fba3/images/JuneSAS2022/sn_distressed_junsas_vn.jpg?yocs=o_s_',
    name: 'Hand Sanitizers',
  },
  {
    img: 'https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw67661151/images/JuneSAS2022/xcat_bfs_junsas_vn.jpg?yocs=o_s_',
    name: 'All Sale',
  },
];

const offers = [
  {
    img: 'https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwcf1b4ffc/images/Summer2022/495selbc_junsas_hps_0.jpg?yocs=o_s_',
  },
  {
    img: 'https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw146b1ca0/images/Summer2022/50offselsoaps_junsas_hps_0.jpg?yocs=o_s_',
  },
  {
    img: 'https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwcf91ef5f/images/Summer2022/50off3w_junsas_hps_0.jpg?yocs=o_s_',
  },
  {
    img: 'https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwb67d7a82/images/Summer2022/350wf_junsas_hps_0.jpg?yocs=o_s_',
  },
];

const gifts = [
  {
    title: 'top gift picks',
  },
  {
    title: 'gift sets',
  },
  {
    title: 'gifts for her',
  },
  {
    title: 'gift for dad',
  },
  {
    title: 'gifts for everyone',
  },
  {
    title: 'accessories',
  },
];

const goodThings = [
  {
    img: 'https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw8f6e14ad/images/Spring2022/xcat_mwts-bopis_sp2_vn.jpg?yocs=q_s_',
    text: "Shop--it's fast, free, easy",
    link: '',
  },
  {
    img: 'https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw644e724c/images/Spring2022/xcat_mwts-sms_sp2_vn.jpg?yocs=q_s_',
    text: 'Sign up for texts',
    link: '',
  },
  {
    img: 'https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw41a3328c/images/Spring2022/xcat_mwts-email_sp2_vn.jpg?yocs=q_s_',
    text: 'Sign up for emails',
    link: '',
  },
  {
    img: 'https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw611329aa/images/Spring2022/xcat_mwts-autorefresh_sp2_vn.png?yocs=q_s_',
    text: 'Check out Auto Refresh',
    link: '',
  },
  {
    img: 'https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw7500932b/images/Spring2022/xcat_mwts-dei_sp2_vn.jpg?yocs=q_s_',
    text: 'See how everyone belongs',
    link: '',
  },
  {
    img: 'https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw4dd3c5f1/images/Spring2022/xcat_mwts-returns_sp2_vn.jpg?yocs=q_s_',
    text:"See our return policy",
    link:""
  },
];

const todays_Offers = [
  {
    extra:"2 days only!",
    text:"Select Men's Body Care",
    offer:"$5.50"
  },
  {
    extra:"Semi-Annual Sale",
    text:"Select Items",
    offer:"50-75%"
  },
  {
    text:"Select Body Care",
    offer:"$4.95"
  },
  {
    text:"Select 3-wick Candles",
    offer:"50% off",

  },
  {
    text:"Select Wallflowers Fragrance Refills",
    offer:"$3.50"
  },
  {
    text:"Select Hand Soaps",
    offer:"50% off"
  },
  {
    text:"Select Single Wick Candles",
    offer:"$5.95"
  }
];

const instaPics = [
  {
    img: 'https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjU1MzE5NjM3Ljk4ODY5NzM5NDE4NS5qcGVn.jpg?w=640&h=640&fit=cover',
  },
  {
    img: 'https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjU1MjMzMjYyLjUwOTQ4NDYwNTA0LmpwZWc=.jpg?w=640&h=640&fit=cover',
  },
  {
    img: 'https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjU1MTQ2ODYwLjY3NTQzMzk4OTM5NC5qcGVn.jpg?w=640&h=640&fit=cover',
  },
  {
    img: 'https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjU1MDYwNDg0LjY1MDMwMzY4NDczMy5qcGVn.jpg?w=640&h=640&fit=cover',
  },
  {
    img: 'https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjU1MDQyNDgzLjcwOTkwMTg4NjQzMy5qcGVn.jpg?w=640&h=640&fit=cover',
  },
  {
    img: 'https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjU0OTc0MDkwLjg5NTk4MTgzMDc5LmpwZWc=.jpg?w=640&h=640&fit=cover',
  },
  {
    img: 'https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjU0ODg3NjkyLjQ0ODI2NjM1NTU4LmpwZWc=.jpg?w=640&h=640&fit=cover',
  },
  {
    img: 'https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjU0ODAxMjY2LjY5NDQyODQ5OTA3MC5qcGVn.jpg?w=640&h=640&fit=cover',
  },
];


function Home() {
  return (
    <Box p={[0, 2, 4, 8]} as={Wrapper}>
      <Promo />

      <Box as="section" bg="#f2f2f2" p={10} my={4} mx={'-32px'}>
        <Heading>Today's Top Offers</Heading>
        <Flex flexWrap={'wrap'} overflow="hidden">
          {todays_Offers.map(offer => (
            <OfferBox {...offer} />
          ))}
        </Flex>
      </Box>
      <Box as="section">
        <Grid
          gap={'40px'}
          templateColumns={{ base: '1fr', md: 'repeat(2,1fr)' }}
          justifyItems="center"
        >
          {offers.map(offer => (
            <GridItem>
              <Image src={offer.img} />
            </GridItem>
          ))}
        </Grid>
      </Box>

      <Box as="section" my={8}>
        <Heading textAlign={'center'}>SHOP BY CATEGORY</Heading>
        <Grid
          textAlign={'center'}
          templateColumns={{
            base: 'repeat(2,1fr)',
            md: 'repeat(3,1fr)',
            lg: 'repeat(6,1fr)',
          }}
          gap={['1.5rem', '1rem']}
        >
          {categories.map(cat => (
            <GridItem>
              <Image src={cat.img} />
              <Link textDecoration={'underline'}>{cat.name}</Link>
            </GridItem>
          ))}
        </Grid>
      </Box>
      <Box as="section" my={4}>
        <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw0ea10a7b/images/Summer2022/xcat_give-love_su1_hb.jpg?yocs=s_" />
        <div className="gifts-button-group">
          {gifts.map(gift => (
            <Link>{gift.title}</Link>
          ))}
        </div>
      </Box>
      <Box as="section" textAlign="center" my={8}>
        <Heading textTransform={'uppercase'}>
          MORE GOOD THINGS, THIS WAY
        </Heading>
        <Grid templateColumns={{ base: 'repeat(2,1fr)', md: 'repeat(3,1fr)' }}>
          {goodThings.map(item => (
            <GridItem>
              <Image src={item.img} />
              <Link>{item.text}</Link>
            </GridItem>
          ))}
        </Grid>
      </Box>
      <Box as="section" textAlign="center" my={8}>
        <Box>
          <Text letterSpacing={'5px'} fontSize="1.2rem">
            @BATHANDBODYWORKS
          </Text>
          <Text color="grey">
            Daily Inspiration. Instant happiness. Right here
          </Text>
        </Box>
        <Box w='100%'>
           <HStack>
            {instaPics.map(el => <Image boxSize={'200px'} src={el.img} />)}
           </HStack>
        </Box>
        <Box my={4}>
          <Text fontSize={'1.9rem'}>Bath & Body Works</Text>
          <Text color="grey">
            Bath and Body Works is your go-to place for gifts & goodies that
            surprise & delight. From fresh fragrances to soothing skin care, we
            make finding your perfect something special a happy-memory-making
            experience. Searching for new seasonal creations or your favorite
            discontinued scents? We’ve got you covered there, too. Oh! And while
            you're browsing, shop our latest & greatest selection of lotions,
            soaps and candles!
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
