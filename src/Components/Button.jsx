import "./Button.css";

const Button = (props) => {
  return <button className="greenButton" onClick = {props.onClick}>{props.label}</button>
}

export default Button;