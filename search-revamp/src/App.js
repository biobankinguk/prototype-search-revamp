import { ThemeProvider, CSSReset, Heading, Flex, Stack } from "@chakra-ui/core"
import './App.css';
import Header from "./components/header";
import Samples from "./components/samples";
import Footer from "./components/footer";
import Facets from "./components/facets";
import Splash from "./components/indexSplash";
import { useFacet } from "./components/api/facetsApi"


function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Header />
      {/* <Splash /> */}
      {/* Stacks the components horizontally */}
      <Stack isInline spacing={5}>
        <Facets />
        <Samples />
      </Stack>

      
      {/* <Footer /> */}
    
    </ThemeProvider>
  );
}

export default App;
