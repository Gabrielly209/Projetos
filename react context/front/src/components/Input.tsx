import { type CSSProperties } from "react";
import { useInputContext } from "../context/InputContext";

export default function Input() {
  const { entrada, setEntrada } = useInputContext();

  return (
    <input
      style={inputSld}
      value={entrada}
      onChange={(e) => setEntrada(e.target.value)}
      placeholder="Digite números separados por espaço"
    />
  );
}

const inputSld: CSSProperties = {
  display: "flex",
  padding: "10px",
  fontSize: "18px",
  borderRadius: "10px",
  border: "1px solid #fff"
};
