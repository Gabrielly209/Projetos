import type { CSSProperties } from "react";
import Ball from "./Ball";
import { useInputContext } from "../context/InputContext";

export default function Display() {
  const { entrada } = useInputContext();

  const numeros = entrada
    .split(" ")
    .filter((n) => n.trim() !== "")
    .slice(0, 6); 

  return (
    <div style={containerSld}>
      {numeros.length === 0 ? (
        <span style={mensagemSld}>Sem entrada</span>
      ) : (
        numeros.map((num, index) => <Ball key={index} value={num} />)
      )}
    </div>
  );
}

const containerSld: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  borderRadius: "10px",
  border: "1px solid #fff",
  padding: "20px",
  gap: "20px",
  minHeight: "80px"
};

const mensagemSld: CSSProperties = {
  color: "#999",
  fontSize: "20px",
  fontStyle: "italic"
};
