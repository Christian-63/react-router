export default function Button({ name, children, onClick }) {
  return (
    <button className={name} onClick={onClick}>
      {children}
    </button>
  );
}