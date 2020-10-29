import React from "react";
import logo from './images/logo.jpg';
import { Link, Icon, Stack, Box, Heading, Flex, Text, Button, Image, Input, InputGroup, InputRightAddon, InputRightElement, ButtonGroup } from "@chakra-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
      borderBottom="1px"
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
    <Stack spacing={8}>
      <Flex>
      <Box
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
      <InputGroup size="lg">
          <Input pr="20rem" placeholder="Search for samples"/>
          <InputRightElement width="5rem">
            <Button size="lg" variant="solid">
            Search
            </Button>
          </InputRightElement>
      </InputGroup>
    </Box>
    <ButtonGroup spacing={4} ml="1.5rem">
          <Button leftIcon="star" variantColor="black" variant="outline" size="lg">
            My List
          </Button>
          <Button leftIcon="arrow-forward" variantColor="black" variant="outline" size="lg">
            My Account
          </Button>
        </ButtonGroup>

    </Flex>

    <Box
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
      <ButtonGroup spacing={20}>
        <Button variantColor="black" variant="link">
          Home
        </Button>
        <Button variantColor="black" variant="link">
          Directory
        </Button>
        <Button variantColor="black" variant="link">
          Help and support
        </Button>
        <Button variantColor="black" variant="link">
          News
        </Button>
        <Button variantColor="black" variant="link">
          About UKCRK
        </Button>
        <Button variantColor="black" variant="link">
          Contact us
        </Button>
      </ButtonGroup>
      </Box>
    </Stack>


    </Flex>


  );
};

export default Header;
