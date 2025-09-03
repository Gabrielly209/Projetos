import type { CSSProperties } from "react";

interface Props {
    value: string;
}

export default function Ball(props:Props) {
  return <div style={ballSld}>{props.value}</div>;
}

const ballSld: CSSProperties = {
  display: "flex",
  backgroundColor: "#20b2aa",
  height: "60px",
  width: "60px",
  borderRadius: "30px",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  fontWeight: "bold",
  fontSize: "25px"
};