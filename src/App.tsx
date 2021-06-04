import { ThemeProvider } from "styled-components";
import { AllSubscriptions } from "./components/AllSubscriptions";
import { Layout } from "./components/Layout";
import { UpcomingCharges } from "./components/UpcomingCharges";
import { theme } from "./theme/Theme";
import { GlobalStyles } from "./theme/GlobalStyles";
import { ModalProvider } from "./providers/ModalProvider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ModalProvider>
        <Layout>
          <UpcomingCharges />
          <AllSubscriptions />
        </Layout>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
