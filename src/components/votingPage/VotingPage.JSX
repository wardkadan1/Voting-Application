/* eslint-disable react/prop-types */
import { useState } from "react";
import Navbar from "../navbar/Navbar";
import Card from "./Card";
import "./votingpage.css";
import { useEffect } from "react";

export default function VotingPage({ user, isUserVoted, setVote }) {
  const [characters, setcharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch(
        "https://67373d98aafa2ef222332359.mockapi.io/presidents"
      );
      const charactersA = await response.json();
      setcharacters(charactersA);
    };

    fetchCharacters();
  }, [isUserVoted]);

  return (
    <div className="base">
      <Navbar user={user} />
      <main>
        <h1>Vote Page</h1>
        <section className="cards">
          {characters.map((character) => (
            <Card
              key={character.id}
              user={user}
              character={character}
              setVote={setVote}
              isUserVoted={isUserVoted}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
