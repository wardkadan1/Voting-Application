/* eslint-disable react/prop-types */
import "./loginp.css";

export default function InputLog({ type, name, setFunch }) {
  return (
    <div className="x">
      <label htmlFor="name">{name}</label>
      <input type={type} onChange={(e) => setFunch(e.target.value)} required />
    </div>
  );
}
