import React, { Component } from "react";
import { Checkbox, CheckboxGroup, Flex, Heading, Text, Box, Stack } from "@chakra-ui/core"

function Feature({ title, subtitle, desc, ...rest }) {
    return (
    <Box p={5} shadow="md" borderWidth="1px" {...rest}>
        <Heading fontSize="xl">{title}</Heading>
        <Heading fontSize="lg" mt="15px">{subtitle}</Heading>
        <Checkbox defaultIsChecked mt={4}>{desc}</Checkbox>
    </Box>
    );
  }

function Facets() {
    return (
      <Stack spacing={8}>
        <Feature
          title="Sample Details"
          subtitle="Sample Type"
          desc="API Content"

        />
        <Feature
          title="Donor information"
          subtitle="Age"
          desc="API Content"
        />
        <Feature
          subtitle="Sex"
          desc="API Content"
        />
      </Stack>
    );
  }

export default class FacetsComponent extends Component {
    render() {
        return (
            <Flex>
                <Facets />
            </Flex>
        )
    }
}