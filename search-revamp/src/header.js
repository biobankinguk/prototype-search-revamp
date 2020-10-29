import React from "react";
import logo from './images/logo.jpg'
import { Box, Heading, Flex, Text, Button, Image, Input, InputGroup, InputRightAddon, InputRightElement } from "@chakra-ui/core";

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

const Header = props => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="white.500"
      borderBottom="2px"
      color="black"
      ma
      {...props}
      
    >
      
      <Flex align="center" mr={5}>
        <Image src={logo}></Image>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <MenuItems>Docs</MenuItems>
        <MenuItems>Examples</MenuItems>
        <MenuItems>Blog</MenuItems>
      </Box>
      <Box
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
      <InputGroup size="md">
          <Input pr="4.5rem" placeholder="Search Collections"/>
          <InputRightElement width="4.5rem">
            <Button size="md">
            Search
            </Button>
          </InputRightElement>
      </InputGroup>
    </Box>


    </Flex>


  );
};

export default Header;
