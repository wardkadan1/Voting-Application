/* eslint-disable react/prop-types */
import "./card.css";
import CardContent from "./CardContent";
import { getCharacter } from "../../data";

export default function Card({ user, character, setVote, isUserVoted }) {
  const onClick = async () => {
    if (isUserVoted) {
      let characterN = await getCharacter(user.voteId);

      await fetch(
        `https://67373d98aafa2ef222332359.mockapi.io/presidents/${user.voteId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            voteCount: characterN.voteCount - 1,
          }),
        }
      );

      await fetch(
        `https://67373d98aafa2ef222332359.mockapi.io/users/${user.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ vote: "", voteId: 0 }),
        }
      );
      setVote(false);
    } else {
      const updatedCharacter = {
        ...character,
        voteCount: character.voteCount + 1,
      };

      await fetch(
        `https://67373d98aafa2ef222332359.mockapi.io/presidents/${character.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedCharacter),
        }
      );

      await fetch(
        `https://67373d98aafa2ef222332359.mockapi.io/users/${user.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ vote: character.name, voteId: character.id }),
        }
      );
      setVote(true);
    }
  };
  return (
    <div>
      <CardContent
        user={user}
        character={character}
        onClick={onClick}
        isUserVoted={isUserVoted}
      />
    </div>
  );
}
