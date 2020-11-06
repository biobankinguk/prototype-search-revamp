import React, { Component } from "react";
import { useDisease } from "./API/diseaseApi";
import { SimpleGrid, Flex, Heading, Text, Box, Stack } from "@chakra-ui/core"

const GetSamples = () => {
  const res = useDisease()
  const diseaseTerm = ""
  const biobank = ""
  const sampleTypeList = []
  const data = {res, diseaseTerm, biobank, sampleTypeList}
  if (res.isLoading){
    return null
  }
  else {
    {res.diseases.map(item => {
      item.diseaseTerm = diseaseTerm
      item.biobank = biobank
      for (const sample of item.sampleTypes){
        sampleTypeList.push(
            <div>{sample}</div>
        )
      }

      })
  }
  return data
  }
}


function Samples() {
    return (
      <Flex padding="30px">
                <Box bg="#EBEBEB" width="1000px" height="300px" >
                         <Stack spacing={3}>
                            <Text fontSize="3xl">Sample Details</Text>
                            <Text fontSize="xl">Sample Type</Text>
                        </Stack> 
                        
                    
                </Box> 
                </Flex>
      
    );
  }

export default Samples
