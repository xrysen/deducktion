import "./Intro.css";
import Button from "./Button";

const Intro = (props) => {
  return (
    <section className="intro-container">
      <h1>Deducktion</h1>
      <p>
        I am collecting data on feeding ducks from around the world and would
        love for you to participate!
      </p>
      <div className="button-container">
        <Button label="Let's Go!" onClick = {props.form} />
        <Button label="View Results" onClick = {props.results} />
      </div>
    </section>
  );
};

export default Intro;
