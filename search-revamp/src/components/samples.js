import React, { Component } from "react";
import { SimpleGrid, Flex, Heading, Text, Box, Stack } from "@chakra-ui/core"

function Feature({ title, desc, ...rest }) {
    return (
    <Box p={5} shadow="md" borderWidth="1px" {...rest}>
        <Heading fontSize="xl">{title}</Heading>
        <Text mt={4}>{desc}</Text>
    </Box>
    );
  }

function Samples() {
    return (
      <Flex padding="30px">
                <Box bg="grey" width="1000px" height="300px" >
                         <Stack spacing={3}>
                            <Text fontSize="3xl">Sample Details</Text>
                            <Text fontSize="xl">Sample Type</Text>
                        </Stack> 
                        
                    
                </Box> 
                </Flex>
      
    );
  }

export default Samples
