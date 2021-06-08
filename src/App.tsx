import { ThemeProvider } from "styled-components";
import { AllSubscriptions } from "./components/AllSubscriptions";
import { Layout } from "./components/Layout";
import { UpcomingCharges } from "./components/UpcomingCharges";
import { theme } from "./theme/Theme";
import { GlobalStyles } from "./theme/GlobalStyles";
import { ModalProvider } from "./providers/ModalProvider";
import { ServicesProvider } from "./providers/ServicesProvider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ServicesProvider>
        <ModalProvider>
          <Layout>
            <UpcomingCharges />
            <AllSubscriptions />
          </Layout>
        </ModalProvider>
      </ServicesProvider>
    </ThemeProvider>
  );
}

export default App;
