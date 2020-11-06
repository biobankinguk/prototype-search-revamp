import React, { Component } from "react";
import { useDisease } from "./API/diseaseApi";
import { Spinner, Flex, Heading, Text, Box, Stack, Grid, Button } from "@chakra-ui/core"
import Plot from "react-plotly.js"


const GetSamples = () => {
  const res = useDisease()
  var diseaseTerm = ""
  var biobank = ""
  var donorList = []
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
        )}
      
      for (const donor of item.donor){
        donorList.push(
          donor
        )}
      })   
  }
  const data = { diseaseTerm, biobank, sampleTypeList, donorList}
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
          <Stack spacing={0}>
            <Box bg="#EBEBEB" width="1000px" height="300px" >
              <Stack spacing={3}>
                  <Heading padding="20px" fontSize="2xl">{loaded.diseaseTerm}</Heading>
                  <Text marginLeft="20px">Number of donors</Text>
              </Stack> 
            </Box> 
            <Box bg="#F7F5F5" width="1000px" height="150px">
              <Text padding="20px"fontSize="xl">{loaded.biobank}</Text>
              <Flex alignItems="right">
                <Button>Test</Button>
              </Flex>
            </Box>
          </Stack>

                </Flex>
      
    );
  }

  }

export default Samples
