/* eslint-disable react/prop-types */
export default function InputLog({ type, name, setFunch }) {
  return (
    <div>
      <label htmlFor="name">{name}</label>
      <input type={type} onChange={(e) => setFunch(e.target.value)} required />
    </div>
  );
}
