export default function Button({ children, onClick, className = "" }) {
  return (
    <button className={`btn-primary ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}