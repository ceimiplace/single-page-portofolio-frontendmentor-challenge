import "./Button.css";
export default function Button({ children, buttonstyle }) {
  return <button className={`${buttonstyle}`}>{children}</button>;
}
