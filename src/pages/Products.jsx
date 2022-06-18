import { Box, Flex, Grid, GridItem, Heading, Text,HStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from "../redux/products/productSlice";
import { useEffect } from "react";
import ProductItem from "../components/product/ProductItem";
import FilterComponent from "../components/product/FilterComponent";

function Products(){
    let  {section} = useParams();
    const dispatch = useDispatch();
    const params = {};
    const {data,isLoading,error,stats} =  useSelector(store => store.products);
    
    if(section){
        params.section = section.toLocaleLowerCase();
    }
    if(section === undefined){
        section= 'All Sales';
    }
    useEffect(() => {
        dispatch(fetchProducts(params));
    },[])
    return <Box p={4}>
    {/* heading & pagination */}
    <Flex justify='space-between' align={'center'} borderBottom='2px solid #333'>
        <Heading textTransform={'capitalize'}>{section}</Heading>
        <Box>

            <Text>{stats.totalDocs} items</Text>
        </Box>
    </Flex>
    {/* filter&sort*/}
    <FilterComponent/>
    <Grid templateColumns={{base:"repeat(3,1fr)",lg:'repeat(4,1fr)'}} gap={['1rem','2rem','3rem']}
     gridAutoRows='500px'
     alignItems={'end'}
    >
        {data?.map((product) => <GridItem key={product.id}>
            <ProductItem product={product}/>
        </GridItem>)}
    </Grid>
    </Box>
}

export default Products;