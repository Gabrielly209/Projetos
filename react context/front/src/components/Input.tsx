import { useState, type CSSProperties } from "react";

export default function Input() {
  const [entrada, setEntrada] = useState("");

  return <input style={inputSld}
    value={entrada} 
    onChange={(e) => setEntrada(e.target.value)} 
  />;
}

const inputSld: CSSProperties = {
    display: "flex",
    padding: "10px",
    fontSize: "18px",
    borderRadius: "10px",
    border: "1px solid #fff"
};