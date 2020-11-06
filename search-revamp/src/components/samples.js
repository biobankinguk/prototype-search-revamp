import React, { Component } from "react";
import { useDisease } from "./API/diseaseApi";
import { Spinner, Flex, Heading, Text, Box, Stack } from "@chakra-ui/core"

const GetSamples = () => {
  const res = useDisease()
  var diseaseTerm = ""
  var biobank = ""
  const sampleTypeList = []
  
  if (res.isLoading){
    return null
  }
  else {
    {res.diseases.map(item => {
      diseaseTerm = item.diseaseTerm
      biobank = item.biobank
      for (const sample of item.sampleTypes){
        sampleTypeList.push(
            <div>{sample}</div>
        )
      }

      })
  }
  const data = { diseaseTerm, biobank, sampleTypeList}
  console.log(data.diseaseTerm)
  return data
  }
}


function Samples() {
  const loaded = GetSamples()
  if (loaded == null) {
        //Render Loading State
        return (
          <Flex padding="30px">
              <Spinner />
              <Flex marginLeft="10px">Loading Sample Data</Flex>
          </Flex>  
      )
  }
  else {
    return (
      <Flex padding="30px">
                <Box bg="#EBEBEB" width="1000px" height="300px" >
                         <Stack spacing={3}>
                            <Text fontSize="2xl">{loaded.diseaseTerm}</Text>

                        </Stack> 
                        
                    
                </Box> 
                </Flex>
      
    );
  }

  }

export default Samples
