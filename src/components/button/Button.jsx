/* eslint-disable react/prop-types */
export default function Button({ className, txt, type, onClick }) {
  return (
    <div>
      <button className={className} type={type} onClick={onClick}>
        {txt}
      </button>
    </div>
  );
}
