import logo from './images/logo.svg';
import { ThemeProvider, CSSReset, Heading } from "@chakra-ui/core"
import './App.css';
import Header from "./header";

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
    <div className="App">
      <Header />
    </div>
    </ThemeProvider>
  );
}

export default App;
