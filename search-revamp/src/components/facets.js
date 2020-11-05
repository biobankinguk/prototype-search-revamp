import React, { Component } from "react";
import { useFacet } from "./api/facetsApi";
import { Checkbox, Grid, Flex, Heading, Text, Box, Stack, Button } from "@chakra-ui/core"

function Feature({ title, subtitle, desc, ...rest }) {
    return (
    <Box p={5} shadow="md" borderWidth="1px" {...rest}>
        <Heading fontSize="xl">{title}</Heading>
        <Heading fontSize="lg" mt="15px">{subtitle}</Heading>
        <Checkbox defaultIsChecked mt={4}>{desc}</Checkbox>
    </Box>
    );
  }

  /*
function GetFacets () {
    const { user, isLoading, isError } = useFacet()
    return (
        <div>

        </div>
    )
}*/

const GetFacets = () => {
    const res = useFacet()
    return <div>{JSON.stringify(res)}</div>
}

const Facets = () => {
    return (
        <div>
            <Flex padding="10px">
            <Box bg="#EBEBEB" height="300px">
                <Flex justify="center" mt="20px" padding="10px">
                    <Stack spacing={5}>
                        <Text fontSize="4xl">Sample Details</Text>
                        <Text fontSize="xl">Sample Type</Text>

                    </Stack>    
                </Flex>
            </Box> 
            </Flex>   

        </div>
    );
  }

export default class FacetsComponent extends Component {
    render() {
        return (
            <Flex>
                <GetFacets />
                <Facets />
            </Flex>
        )
    }
}