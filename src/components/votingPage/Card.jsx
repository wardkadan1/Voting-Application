/* eslint-disable react/prop-types */
import Button from "./../button/Button";
import "./card.css";

export default function Card({ character }) {
  return (
    <div className="card">
      <section className="image-content">
        <img src={`images/${character.name}.jpg`} alt="" />
        <h4 className="votes">Votes: {character.voteCount}</h4>
      </section>
      <section className="down">
        <h3>{character.name}</h3>
        <Button className={"btn"} txt="Vote" />
      </section>
    </div>
  );
}
