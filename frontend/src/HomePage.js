import React from 'react';
import { Button , Box , Stack , Text } from '@chakra-ui/react';

function HomePage(){

    return (

        <Box  backgroundColor={"yellow.300"}  align={"center"} width = "100vw" h="100vh"  pt = "5%">
            <Stack width="100%" h="100%" align="center" spacing={4}>
                <Text fontSize={50}> LeetCode Bar  </Text>  
            </Stack>
        </Box> 
    );
}

export default HomePage