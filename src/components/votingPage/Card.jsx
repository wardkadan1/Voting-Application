/* eslint-disable react/prop-types */
import { useState } from "react";
import "./card.css";
import CardContent from "./CardContent";

export default function Card({ character }) {
  const [show, setshow] = useState(false);
  const [btnName, changebtnName] = useState("Vote");
  const onClick1 = () => {
    console.log("onClick1");
    changebtnName("Change Vote");
    setshow(true);
  };
  const onClick2 = () => {
    console.log("onClick2");
    setshow(false);
  };
  return (
    <div>
      <CardContent
        character={character}
        onClick1={onClick1}
        onClick2={onClick2}
        txt={btnName}
        show={show}
      />
    </div>
  );
}
