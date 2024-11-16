/* eslint-disable react/prop-types */
import Navbar from "../navbar/Navbar";
import Card from "./Card";
import "./votingpage.css";

export default function VotingPage({ user, characters }) {
  return (
    <div className="base">
      <Navbar user={user} />
      <main>
        <h1>Vote Page</h1>
        <section className="cards">
          {characters.map((character) => (
            <Card key={character.id} character={character} />
          ))}
        </section>
      </main>
    </div>
  );
}
