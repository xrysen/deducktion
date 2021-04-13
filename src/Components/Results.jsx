import { useEffect, useState } from "react";
import "./Results.css";

const Result = () => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/data")
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(true);
        setData(result);
      });
  }, []);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  } else {
    return (
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
              <tr key = {item.id}>
                <td>{item.city}</td>
                <td>{item.country}</td>
                <td>{item.duckQty}</td>
                <td>{item.food}</td>
                <td>{item.foodQty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  }
};

export default Result;
