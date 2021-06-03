import { ThemeProvider } from "styled-components";
import "./App.css";
import { Layout } from "./components/Layout";
import { UpcomingCharges } from "./components/UpcomingCharges";
import { theme } from "./Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <UpcomingCharges />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
