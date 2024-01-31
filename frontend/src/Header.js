import React from 'react';
import { Box, Flex, Heading, Button ,Text } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

function Header(){
    const nav = useNavigate();
    const LogInevent = () => {
        nav("/login");
    }

    return (
        <Flex
        as="header"
        align="center"
        justify="space-between"
        padding="4"
        borderBottom="1px"
        borderColor="gray.200"
      >
        <Heading as="h1" size="lg">
          LeetCode Bar 
        </Heading>
        <Button colorScheme="teal" variant="outline" onClick={() => LogInevent()}>
          Log In 
        </Button>
      </Flex>
    );
}


export default Header;