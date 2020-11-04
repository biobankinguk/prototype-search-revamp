import { ThemeProvider, CSSReset, Heading } from "@chakra-ui/core"
import './App.css';
import Header from "./components/header";
import Samples from "./components/samples";
import Footer from "./components/footer";
import Facets from "./components/facets";
import Splash from "./components/indexSplash";
import FacetsApi from "./components/API/facetsApi";

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Header />
      {/* <Splash /> */}
      {/* <Facets /> */}
      <FacetsApi />
      <Footer />
    
    </ThemeProvider>
  );
}

export default App;
