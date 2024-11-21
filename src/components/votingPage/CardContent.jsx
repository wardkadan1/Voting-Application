/* eslint-disable react/prop-types */
import Button from "./../button/Button";
import "./card.css";
import { useState, useEffect } from "react";

export default function CardContent({ character, onClick, isUserVoted }) {
  const [Txt, setTxt] = useState("");
  useEffect(() => {
    if (isUserVoted) {
      setTxt("Change Vote");
    } else {
      setTxt("Vote");
    }
  }, [isUserVoted]);

  return (
    <div className="card">
      <section className="image-content">
        <img src={`images/${character.name}.jpg`} alt="" />
        <h4 className="votes">Votes: {character.voteCount}</h4>
      </section>
      <section className="down">
        <h3>{character.name}</h3>
        <Button className={"btn"} txt={Txt} onClick={onClick} />
      </section>
    </div>
  );
}
