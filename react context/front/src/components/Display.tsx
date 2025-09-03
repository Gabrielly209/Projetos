import type { CSSProperties } from "react";
import Ball from "./Ball";

export default function Display(){
    return <div style={containerSld}>
        <Ball value={11} />
        <Ball value={22} />
        <Ball value={33} />
    </div>
}

const containerSld: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: "10px",
    border: "1px solid #fff",
    padding: "20px",
    gap: "20px"
};