import { Stack } from '@chakra-ui/react';
import { BsStarHalf, BsStar,BsStarFill } from 'react-icons/bs';

function RatingStrip({rating}) {
    let stars = [];
    for(let i=0;i<5;i++){
        if(rating >= 1)
            stars.push(BsStarFill);
        else if ( rating > 0 && rating < 1)
            stars.push(BsStarHalf);
        else
            stars.push(BsStar);
        rating--;
    }
    return <Stack direction={'row'}>
        {stars.map(Star =>  <Star/>)}
    </Stack>
}

export default RatingStrip;