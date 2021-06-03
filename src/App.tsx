import { ThemeProvider } from "styled-components";
import { AllSubscriptions } from "./components/AllSubscriptions";
import { Layout } from "./components/Layout";
import { UpcomingCharges } from "./components/UpcomingCharges";
import { theme } from "./Theme";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <UpcomingCharges />
        <AllSubscriptions />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
