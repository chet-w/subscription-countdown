import React, {
  createContext,
  ReactElement,
  useContext,
  useState
} from "react";
import { AnimatePresence } from "framer-motion";
import { ModalContextValues, ModalProviderProps } from "./types";
import { Backdrop } from "../../components/Modal";

const ModalContext = createContext<ModalContextValues | null>(null);

export function useModal(): ModalContextValues {
  return useContext(ModalContext)!;
}

export function ModalProvider(props: ModalProviderProps): ReactElement {
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
            <Backdrop>{modal}</Backdrop>
          </>
        )}
      </AnimatePresence>
    </ModalContext.Provider>
  );
}
