import React, { Component } from "react";
import { Grid, Flex, Heading, Text, Box, Stack, Button } from "@chakra-ui/core"

function Splash() {
    return (
        <div>
        <Flex justify="center">
            <Box mt="20px">
                <Text fontSize="5xl">Improving access to human tissue samples</Text>
            </Box>

        </Flex>
        <Grid templateColumns="repeat(2, 1fr)" gap={6} padding="50px">
            <Box bg="#EBEBEB" height="300px">
                <Flex justify="center" mt="70px">
                    <Stack spacing={5}>
                        <Text fontSize="4xl">Need tissue samples for your research?</Text>
                        <Button
                         bg="#808080" 
                         variant="solid" 
                         color="white" 
                         _hover={{ bg: "#4d4d4d" }} 
                         size="lg">
                            Search the directory
                        </Button>
                    </Stack>    
                </Flex>
            </Box>    
            <Box bg="#EBEBEB" height="300px">
            <Flex justify="center" mt="70px">
                    <Stack spacing={5}>
                        <Text fontSize="4xl">Share your samples and collaborate with researchers</Text>
                        <Button
                         bg="#808080" 
                         variant="solid" 
                         color="white" 
                         _hover={{ bg: "#4d4d4d" }} 
                         size="lg">
                            Register with us
                        </Button>
                    </Stack>    
                </Flex>
            </Box>  
        </Grid>
        </div>
    );
}

export default class splashComponent extends Component {
    render() {
        return (
            <Splash />
        )
    }
}