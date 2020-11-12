import React, { Component } from "react";
import { useDisease } from "./API/diseaseApi";
import '../samples.css';
import { Spinner, Flex, Heading, Text, Box, Stack, Badge, Button, Collapse, Divider } from "@chakra-ui/core"



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
  
            <Badge fontSize="0.9em" color="white" bg="#858585" fontWeight="regular">{sample}</Badge>
        
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

function DropDown() {
  const [show, setShow] = React.useState(false);
  const [buttonText, setButtonText] = React.useState("")

  const handleToggle = () => {
    setShow(!show);
  } 

  return (
    <>
    <Button onClick={handleToggle} variant="link" marginLeft="20px">
        See more details
      </Button>
      <Collapse mt={5} isOpen={show} >
        <Divider borderColor="black.800" />
          <Flex marginLeft="20px">Load in data from API</Flex>
      </Collapse>

    </>
  );
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
              <Stack isInline>
              <Stack spacing={3}>
                  <Heading padding="20px" fontSize="2xl">{loaded.diseaseTerm}</Heading>
                  <Text marginLeft="20px">Number of donors</Text>
              </Stack> 
              <Stack spacing={3}>
                <Flex padding="20px" marginTop="60px">
                <Text>Sample types available</Text>
                </Flex>
                <Flex marginLeft="20px">
                  <Box width="20px">
                    <Stack isInline>{loaded.sampleTypeList}</Stack>
                  </Box>
                </Flex>
                
                
              </Stack>
              <Stack spacing={3} marginLeft="auto" padding="20px">
              <Button leftIcon="star" variantColor="black" variant="link" size="md">
              Add to my list 
              </Button>
              </Stack>
              </Stack>

            </Box> 
            <Box bg="#F7F5F5" width="1000px" height="150px">
              <Stack isInline className="resource">
                <Text padding="20px"fontSize="xl">{loaded.biobank}</Text>
                <Flex direction="right" padding="20px" marginLeft="auto">
                  <Button bg="#4d4d4d" color="white" _hover={{ bg: "#1a1a1a" }}>View Resource</Button>
                </Flex>
              </Stack>
            <DropDown />
              



            </Box>
          </Stack>

                </Flex>
      
    );
  }

  }

export default Samples
