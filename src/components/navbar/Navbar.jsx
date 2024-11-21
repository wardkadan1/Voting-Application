/* eslint-disable react/prop-types */
import Logo from "../../../public/images/vote.png";
import Button from "./../button/Button";
import { useState } from "react";
import "./nav.css";

export default function Navbar({ user }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  if (user.type === "admin")
    return (
      <nav className="navBox">
        <img className="logo" src={Logo} alt="logo" />
        <Button
          className="dropbtn"
          txt="Menu"
          type="submit"
          onClick={toggleDropdown}
        />
        {isOpen && (
          <div className="dropdown-content">
            <Button txt="Vote" type="submit" />
            <Button txt="Statics" type="submit" />
            <Button txt="Logout" type="submit" />
          </div>
        )}
      </nav>
    );
  else
    return (
      <nav className="navBox">
        <img className="logo" src={Logo} alt="logo" />
        <section>
          <Button
            className="dropbtn"
            txt="Menu"
            type="submit"
            onClick={toggleDropdown}
          />
          {isOpen && (
            <div className="dropdown-content">
              <Button txt="Vote" type="submit" />
              <Button txt="Logout" type="submit" />
            </div>
          )}
        </section>
      </nav>
    );
}
