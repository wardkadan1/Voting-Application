/* eslint-disable react/prop-types */
import "./statics.css";

export default function Statics({ users }) {
  return (
    <div className="table">
      <h2>User Statistics</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.name}>
              <td>{user.name}</td>
              <td>{user.vote ? "Voted" : "Did Not Vote"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
