import React, { Component, Suspense } from "react";
import { useFacet } from "./api/facetsApi";
import { Checkbox, Grid, Flex, Heading, Text, Box, Stack, Button, Spinner, MenuItem } from "@chakra-ui/core"

function Feature({ title, subtitle, desc, ...rest }) {
    return (
    <Box p={5} shadow="md" borderWidth="1px" {...rest}>
        <Heading fontSize="xl">{title}</Heading>
        <Heading fontSize="lg" mt="15px">{subtitle}</Heading>
        <Checkbox defaultIsChecked mt={4}>{desc}</Checkbox>
    </Box>
    );
  }

const CheckTest = props => {
    return (
        <li>
            <div>{props}</div>
        </li>
    )
}

const GetFacets = () => {
    const res = useFacet()
    const items = []
    if (res.isLoading) {
        //Render Loading State
        return <Spinner />
    }
    else {
        {res.facets.map(item => {
            for (const test of item.bodySystemArea){
                items.push(
                    <Stack padding="3px">
                        <Checkbox isChecked="true">{test}</Checkbox>
                    </Stack>
                    
                )
            }
        })}
        return <div>{items}</div>
            
        
    }
}




const Facets = () => {
    const res = useFacet()
        return (
            <div>
                <Stack spacing={5}>
                <Flex padding="10px">
                <Box bg="#EBEBEB" >
                         <Stack spacing={5}>
                            <Text fontSize="3xl">Sample Details</Text>
                            <Text fontSize="xl">Sample Type</Text>
                            {GetFacets()}
                        </Stack>    
                    
                </Box> 
                </Flex>
                <Flex padding="10px">
                <Box bg="#EBEBEB" height="300px">
                    <Flex mt="20px" padding="10px"  width="300px">
                        <Stack spacing={5}>
                            <Text fontSize="3xl">Donor Information</Text>
                            <Text fontSize="xl">Age</Text>
                        </Stack>    
                    </Flex>
                </Box> 
                </Flex>
                <Flex padding="10px">
                <Box bg="#EBEBEB" height="300px">
                    <Flex mt="20px" padding="10px"  width="300px">
                        <Stack spacing={5}>
                            <Text fontSize="3xl">Consent</Text>
                            <Text fontSize="xl">Restrictions</Text>
                        </Stack>    
                    </Flex>
                </Box> 
                </Flex>
                </Stack>   
                
            </div>
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