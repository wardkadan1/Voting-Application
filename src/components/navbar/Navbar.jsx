/* eslint-disable react/prop-types */
import Logo from "../../assets/images/vote.png";
import Button from "./../button/Button";
import { useState } from "react";
import "./nav.css";

export default function Navbar({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(user);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };
  if (user.type === "admin")
    return (
      <nav className="navBox">
        <img src={Logo} alt="logo" />
        <button className="dropbtn" onClick={toggleDropdown}>
          Dropdowns
        </button>
        {isOpen && (
          <div className="dropdown-content">
            <Button txt="Login" type="submit" />
            <Button txt="Login" type="submit" />
            <Button txt="Login" type="submit" />
          </div>
        )}
      </nav>
    );
  else
    return (
      <nav className="navBox">
        <img className="logo" src={Logo} alt="logo" />
        <section>
          <button className="dropbtn" onClick={toggleDropdown}>
            Dropdowns
          </button>
          {isOpen && (
            <div className="dropdown-content">
              <Button txt="Login" type="submit" />
              <Button txt="Login" type="submit" />
            </div>
          )}
        </section>
      </nav>
    );
}
