import React, { createContext, ReactElement, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ModalContextValues } from "./types";

const ModalContext = createContext<ModalContextValues | null>(null);

function ModalProvider(): ReactElement {
  const [modal, setModal] = useState<ReactElement | null>(null);

  const openModal = (newModal: ReactElement): void => {
    setModal(newModal);
  };

  const closeModal = (): void => {
    setModal(null);
  };

  return (
    <ModalContext.Provider
      value={{
        openModal,
        closeModal,
        isOpen: Boolean(modal)
      }}
    >
      {props.children}
      <AnimatePresence>
        {modal && (
          <>
            <div />
            modal
          </>
        )}
      </AnimatePresence>
    </ModalContext.Provider>
  );
}

export default ModalProvider;
