/* eslint-disable react/prop-types */
import Logo from "../../../public/images/vote.png";
import Button from "./../button/Button";
import { useState } from "react";
import "./nav.css";

export default function Navbar({ user, setUser, setPage }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const onClick = () => {
    setUser(undefined);
  };

  const onClickS = () => {
    setPage("Statics");
  };

  const onClickV = () => {
    setPage("Vote");
  };

  if (user.type === "admin")
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
              <Button txt="Vote" type="submit" onClick={onClickV} />
              <Button txt="Statics" type="submit" onClick={onClickS} />
              <Button txt="Logout" type="submit" onClick={onClick} />
            </div>
          )}
        </section>
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
              <Button txt="Logout" type="submit" onClick={onClick} />
            </div>
          )}
        </section>
      </nav>
    );
}
