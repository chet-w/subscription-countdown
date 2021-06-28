import React from "react";
import { ThemeProvider } from "styled-components";
import { AllSubscriptions } from "./components/AllSubscriptions";
import { Layout } from "./components/Layout";
import { UpcomingCharges } from "./components/UpcomingCharges";
import { theme } from "./theme/Theme";
import { GlobalStyles } from "./theme/GlobalStyles";
import { ModalProvider } from "./providers/ModalProvider";
import { ServicesProvider } from "./providers/ServicesProvider";
import { NotificationProvider } from "./providers/NotificationProvider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NotificationProvider>
        <ServicesProvider>
          <ModalProvider>
            <Layout>
              <UpcomingCharges />
              <AllSubscriptions />
            </Layout>
          </ModalProvider>
        </ServicesProvider>
      </NotificationProvider>
    </ThemeProvider>
  );
}

export default App;
