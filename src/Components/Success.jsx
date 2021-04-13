import "./Success.css";
import Button from "./Button";

const Success = (props) => {
  return (
    <section className="success-container">
      <h1>Submission Received!</h1>
      <p>Thank you for participating in this survey!</p>
      <Button onClick = {props.back} label = "Go To HomePage" />
      <Button onClick = {props.results} label = "View Results" />
    </section>
  )
}

export default Success;