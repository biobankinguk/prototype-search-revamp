import { ThemeProvider, CSSReset, Heading } from "@chakra-ui/core"
import './App.css';
import Header from "./components/header";
import Samples from "./components/samples";
import Footer from "./components/footer";
import Facets from "./components/facets";

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Header />
      <Facets />
      <Samples />
      <Footer />
    
    </ThemeProvider>
  );
}

export default App;
