import { createContext, useState, type ReactNode, useContext } from "react";

interface InputContextType {
  entrada: string;
  setEntrada: (value: string) => void;
}

const InputContext = createContext<InputContextType | undefined>(undefined);

export const InputProvider = ({ children }: { children: ReactNode }) => {
  const [entrada, setEntrada] = useState("");

  return (
    <InputContext.Provider value={{ entrada, setEntrada }}>
      {children}
    </InputContext.Provider>
  );
};

export const useInputContext = () => {
  const context = useContext(InputContext);
  if (!context) throw new Error("useInputContext must be used inside InputProvider");
  return context;
};
