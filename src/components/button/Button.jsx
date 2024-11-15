/* eslint-disable react/prop-types */
export default function Button({ txt, type }) {
  return (
    <div>
      <button type={type}>{txt}</button>
    </div>
  );
}
