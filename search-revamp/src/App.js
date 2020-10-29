import { ThemeProvider, CSSReset, Heading } from "@chakra-ui/core"
import './App.css';
import Header from "./header";

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Header />
    
    </ThemeProvider>
  );
}

export default App;
