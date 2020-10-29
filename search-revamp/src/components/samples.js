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
      <Stack spacing={8}>
        <Feature
          title="Disease Name"
          desc="Wales cancer bank"
        />
        <Feature
          title="Disease Name"
          desc="Cancer Group CTR Cardiff trials"
        />
      </Stack>
    );
  }

export default class SamplesComponent extends Component {
    render() {
        return (
            <Flex>
                <Samples />
            </Flex>
        )
    }
}