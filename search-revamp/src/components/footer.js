import React, { Component } from "react";
import uniLogo from '../images/universityLogo.png';
import uclLogo from '../images/uclLogo.png';
import adacLogo from '../images/adacLogo.png';
import { Image, Flex, Grid, SimpleGrid, Stack, Text, Heading } from "@chakra-ui/core"

const footerStyle = {
  backgroundColor: "#858585",
  fontSize: "20px",
  color: "white",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "200px",
  width: "100%"
};

const phantomStyle = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%"
};

const Footer = ({ children }) => {
  return (
    <div>
      <div style={phantomStyle} />
      <div style={footerStyle}>{children}</div>
    </div>
  );
}

export default class FooterComponent extends Component {
    render() {
        return (
            <Footer>
                <Grid templateColumns="repeat(3, 1fr)" >
                    <Image src={uniLogo}/>  
                    <Image src={adacLogo}/>
                    <Image src={uclLogo}/>
                </Grid>
            
                <Grid templateColumns="repeat(3, 1fr)" padding="20px">
                <Heading as="h4" size="md">
                   Contact us
                </Heading>
                <Heading as="h4" size="md">
                   Connect with us
                </Heading>
                <Heading as="h4" size="md">
                   Further information
                </Heading>
                </Grid>
            </Footer>

        )
    }
}