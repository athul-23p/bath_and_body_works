import { Spinner,Box, Center } from "@chakra-ui/react";

function Loading(){
    return <Center h='100vh' w='100vw' bg='rgba(255,255,255,0.3)' position='fixed' top='0px'>
            <Spinner size='lg'  />
    </Center>
}

export default Loading;