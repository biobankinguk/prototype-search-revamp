import React from "react";
import { useFacet } from "./API/facetApi";
import { Checkbox, Flex, Text, Box, Stack, Spinner } from "@chakra-ui/core"

const GetFacets = () => {
    const res = useFacet()
    const bodyList = [], sampleList = [], ageList = [], sexList = [], consentList = [];
    const data = { res, bodyList, sampleList, ageList, sexList, consentList }
    
    if (res.isLoading) {
        return null
    }
    else {
        {res.facets.map(item => {
            for (const body of item.bodySystemArea){
                bodyList.push(
                    <Stack padding="3px">
                        <Checkbox >{body}</Checkbox>
                    </Stack>
                )
            }
            for (const sample of item.sampleType){
                sampleList.push(
                    <Stack padding="3px">
                        <Checkbox>{sample}</Checkbox>
                    </Stack>
                )
            }
            for (const age of item.age){
                ageList.push(
                    <Stack padding="3px">
                        <Checkbox>{age}</Checkbox>
                    </Stack>
                )
            }
            for (const sex of item.sex){
                sexList.push(
                    <Stack padding="3px">
                        <Checkbox>{sex}</Checkbox>
                    </Stack>
                )
            }
            for (const consent of item.consentRestrictions){
                consentList.push(
                    <Stack padding="3px">
                        <Checkbox>{consent}</Checkbox>
                    </Stack>
                )
            }
        })}}

        return data       
    }


const Facets = () => {
    const loaded = GetFacets()
    if (loaded == null) {
        //Render Loading State
        return (
            <Flex padding="30px">
                <Spinner />
                <Flex marginLeft="10px">Loading Facet Data</Flex>
            </Flex>  
        )
    }
    else {
        return (
            <div>
                <Stack>
                <Flex padding="20px">
                <Box bg="white" >
                         <Stack spacing={3}>
                            <Text fontSize="3xl">Sample Details</Text>
                            <Text fontSize="xl">Sample Type</Text>
                            <div>{loaded.bodyList}</div>   
                        </Stack> 
                        
                    
                </Box> 
                </Flex>
                <Flex padding="20px">
                <Box bg="white" >
                        <Stack spacing={3}>
                            <Text fontSize="3xl">Donor Information</Text>
                            <Text fontSize="xl">Age</Text>
                            <div>{loaded.ageList}</div>
                        </Stack>    
                </Box> 
                </Flex>
                <Flex padding="20px">
                <Box bg="white">
                        <Stack spacing={3}>
                            <Text fontSize="3xl">Consent</Text>
                            <Text fontSize="xl">Restrictions</Text>
                            <div>{loaded.consentList}</div>
                        </Stack>    
                </Box> 
                </Flex>
                </Stack>   
                
            </div>
    );
    }

  }

export default Facets;