/* eslint-disable react/prop-types */
import { useState } from "react";
import Navbar from "../navbar/Navbar";
import Card from "./Card";
import "./votingpage.css";
import { useEffect } from "react";
import Statics from "../statics/Statics";

export default function VotingPage({
  user,
  users,
  isUserVoted,
  setVote,
  setUser,
}) {
  const [characters, setcharacters] = useState([]);
  const [page, setPage] = useState("Vote");

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

  if (page === "Vote") {
    return (
      <div className="base">
        <Navbar user={user} setUser={setUser} setPage={setPage} />
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
  } else {
    return (
      <div className="base">
        <Navbar user={user} setUser={setUser} setPage={setPage} />
        <main>
          <Statics users={users} />
        </main>
      </div>
    );
  }
}
