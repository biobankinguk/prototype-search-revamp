import React, { Component } from "react";
import { useDisease } from "./API/diseaseApi";
import '../samples.css';
import { Spinner, Flex, Heading, Text, Box, Stack, Badge, Button, Collapse, Divider, Icon } from "@chakra-ui/core"
import Plot from 'react-plotly.js';



const GetSamples = () => {
  const res = useDisease()
  var diseaseTerm = ""
  var biobank = ""
  var donorList = []
  const sampleTypeList = []
  const associatedDataList = []
  const consentList = []
  
  if (res.isLoading){
    return null
  }
  else {
    {res.diseases.map(item => {
      diseaseTerm = item.diseaseTerm
      biobank = item.biobank
      for (const sample of item.sampleTypes){
        sampleTypeList.push(
  
            <Badge 
              fontSize="0.9em"
              color="white" bg="#858585"
              fontWeight="regular"
              padding="4px"
              >{sample}</Badge>
        
        )}
      for (const associatedData of item.associatedData){
        associatedDataList.push(
          <div>{associatedData}</div>
        )
      }
      for (const consentRestriction of item.consent){
        consentList.push(
          <div>{consentRestriction}</div>
        )
      }
      
      for (const donor of item.donor){
        donorList.push(
          donor
        )}
      })   
  }
  const data = { diseaseTerm, biobank, sampleTypeList, associatedDataList, donorList, consentList}
  return data
  }
}

function DropDown(props) {
  const [show, setShow] = React.useState(false);
  const [buttonToggle, setButtonToggle] = React.useState(true)

  const handleToggle = () => {
    setShow(!show);
  } 

  return (
    <>
    <Button onClick={handleToggle} variant="link" marginLeft="20px" color="black" marginBottom="20px">
    {buttonToggle ? (
      <Flex>
        <Text onClick={() => setButtonToggle(false)}> See more details</Text>
        <Icon marginTop="5px" marginLeft="5px" name="arrow-down"></Icon>
      </Flex>

      ) : (
        <Flex>
            <Text onClick={() => setButtonToggle(true)}> Hide details</Text>
            <Icon marginTop="5px" marginLeft="5px" name="arrow-up"></Icon>
        </Flex>
        
      )}
      </Button>
      <Collapse mt={5} isOpen={show} marginBottom="20px">
        <Divider borderColor="black.800" />
          <Flex marginLeft="20px">
            <Stack isInline spacing={10}>
              <Stack>
                <Text fontWeight="bold">Consent</Text>
                <Text>{props.loaded.consentList}</Text>
              </Stack>
              <Stack>
                <Text fontWeight="bold">Associated Data</Text>
                <Text>{props.loaded.associatedDataList}</Text>
              </Stack>
            </Stack>          
            </Flex>
      </Collapse>

    </>
  );
}

function PlotGraph () {
  //Pull in data from API and 
  var donorData = {
    type: 'bar',
    x: ['Female40', 'Male40', 'Child18'],
    y: [500, 1000, 300],
    marker: {
        color: '#ff8b0f',
        line: {
            width: 2.5
        }
    }
  };

  var layoutSpec = {
    width: 400, 
    height: 300, 
    paper_bgcolor:'rgba(0,0,0,0)',
    plot_bgcolor:'rgba(0,0,0,0)',
    yaxis: {
      title: {
        text: 'Number of donors'
      }
    }
  }
  
  return (
    <Plot
    data= {[donorData]}
    layout={layoutSpec}
    /> 
  )
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
            <Box bg="#EBEBEB">
              <Stack isInline>
              <Stack spacing={3}>
                  <Heading padding="20px" fontSize="2xl">{loaded.diseaseTerm}</Heading>
                  <Text marginLeft="20px">Number of donors</Text>
                  <PlotGraph />
              </Stack>

              <Stack spacing={3}>
                <Flex padding="20px" marginTop="60px">
                <Text>Sample types available</Text>
                </Flex>
                <Flex marginLeft="20px">
                    <Stack isInline>{loaded.sampleTypeList}</Stack>
                </Flex>
                
                
              </Stack>
              <Stack spacing={3} padding="20px">
                <Button  marginLeft="auto"  leftIcon="star" variantColor="black" variant="link" size="md">
                Add to my list 
                </Button>
                <Button marginLeft="auto" variantColor="black" variant="link" size="md" marginTop="auto">
                See other {loaded.diseaseTerm} samples
                </Button>
              </Stack>
              </Stack>

            </Box> 
            <Box bg="#F7F5F5" marginBottom="20px" >
              <Stack isInline className="resource">
                <Text padding="20px"fontSize="xl">{loaded.biobank}</Text>
                <Flex direction="right" padding="20px" marginLeft="auto">
                  <Button bg="#4d4d4d" color="white" _hover={{ bg: "#1a1a1a" }}>View Resource</Button>
                </Flex>
              </Stack>
              
                <DropDown loaded={loaded}/>
             
                
            
            



            </Box>
          </Stack>

                </Flex>
      
    );
  }

  }

export default Samples
