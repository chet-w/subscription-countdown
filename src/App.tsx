import { ThemeProvider } from "styled-components";
import "./App.css";
import { Layout } from "./components/Layout";
import { theme } from "./Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <h2>111</h2>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
