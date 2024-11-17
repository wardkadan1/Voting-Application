/* eslint-disable react/prop-types */
import Button from "./../button/Button";
import "./card.css";

export default function CardContent({
  character,
  onClick1,
  onClick2,
  txt,
  show,
}) {
  return (
    <div className="card">
      <section className="image-content">
        <img src={`images/${character.name}.jpg`} alt="" />
        <h4 className="votes">Votes: {character.voteCount}</h4>
      </section>
      <section className="down">
        <h3>{character.name}</h3>
        {!show && <Button className={"btn"} txt={txt} onClick={onClick1} />}
        {show && <Button className={"btn"} txt={txt} onClick={onClick2} />}
      </section>
    </div>
  );
}
