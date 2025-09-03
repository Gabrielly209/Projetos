import type { CSSProperties } from "react";
import Display from "./components/Display";
import Input from "./components/Input";
import { InputProvider } from "./context/InputContext";

export default function App() {
  return (
    <InputProvider>
      <div style={containerSld}>
        <Input />
        <Display />
      </div>
    </InputProvider>
  );
}

const containerSld: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  border: "1px solid #fff",
  padding: "20px",
  borderRadius: "10px",
  width: "600px",
  gap: "20px"
};
