import Button from "../button/Button";
import InputLog from "./InputLog";
import { useState } from "react";
import VotingPage from "../votingPage/VotingPage";
import Logo from "../../../public/images/vote1.png";
import "./loginp.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userP, setUserP] = useState("");
  const [characters, setcharacters] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const responseU = await fetch(
        "https://67373d98aafa2ef222332359.mockapi.io/users"
      );
      const users = await responseU.json();
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      const responseP = await fetch(
        "https://67373d98aafa2ef222332359.mockapi.io/presidents"
      );
      const charactersA = await responseP.json();

      if (user) {
        setUserP(user);
        setcharacters(charactersA);
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      setError("An error occurred while logging in. Please try again later.");
      console.error(error);
    }
  };

  if (userP !== "") {
    return (
      <div>
        <VotingPage characters={characters} user={userP} />
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
