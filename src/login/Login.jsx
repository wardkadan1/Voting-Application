/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from "react";
import Logo from "../../public/images/vote1.png";
import "./loginp.css";
import { VotingPage } from "./../components/votingPage/VotingPage";
import InputLog from "./InputLog";
import Button from "./../components/button/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userP, setUserP] = useState("");
  const [userS, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [isUserVoted, setIsUserVoted] = useState(false);

  useEffect(() => {
    const fetchCharacters = async () => {
      const responseU = await fetch(
        "https://67373d98aafa2ef222332359.mockapi.io/users"
      );
      const users = await responseU.json();
      const user = users.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        setUserP(user);
      }
      setUsers(users);
    };
    fetchCharacters();
  }, [isUserVoted]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = userS.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        setUserP(user);
        if (user.vote) {
          setIsUserVoted(true);
        } else {
          setIsUserVoted(false);
        }
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      setError("An error occurred while logging in. Please try again later.");
      console.error(error);
    }
  };

  if (userP) {
    return (
      <div>
        <VotingPage
          setVote={setIsUserVoted}
          isUserVoted={isUserVoted}
          user={userP}
          users={userS}
          setUser={setUserP}
        />
      </div>
    );
  }

  return (
    <div className="loginpage">
      <form className="box" onSubmit={handleLogin}>
        <img src={Logo} alt="logo" />
        <InputLog type="email" name="Email" setFunch={setEmail} />
        <InputLog type="password" name="Password" setFunch={setPassword} />
        <Button className="btn" txt="Login" type="submit" />
      </form>
      <p className="error">{error}</p>
    </div>
  );
}
