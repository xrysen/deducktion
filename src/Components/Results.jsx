import { useEffect, useState } from "react";
import { AnimateOnChange } from "react-animation";
import Button from "./Button";
import "./Results.css";
import { ENDPOINT } from "../static/constants";

const Results = (props) => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(ENDPOINT)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        // Force a bit of a delay so the transition is smoother
        setTimeout(() => {
          setIsLoaded(true);
        }, 200);
      });
  }, []);

  if (!isLoaded) {
    return (
      <AnimateOnChange>
        <h1>Please wait...</h1>
      </AnimateOnChange>
    );
  } else {
    return (
      <AnimateOnChange>
        <section className="table-container">
          <h1>Results</h1>
          <table className="styled-table">
            <thead>
              <tr>
                <th>City</th>
                <th>Country</th>
                <th>Number of Ducks</th>
                <th>Type of Food</th>
                <th>Food Weight (in grams)</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.city}</td>
                  <td>{item.country}</td>
                  <td>{item.duckQty}</td>
                  <td>{item.food}</td>
                  <td>{item.foodQty}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Button onClick={props.back} label="Go Back" />
        </section>
      </AnimateOnChange>
    );
  }
};

export default Results;
