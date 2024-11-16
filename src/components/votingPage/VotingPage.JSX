/* eslint-disable react/prop-types */
import Navbar from "../navbar/Navbar";
import "./votingpage.css";

export default function VotingPage({ user }) {
  return (
    <div className="base">
      <Navbar user={user} />
    </div>
  );
}
