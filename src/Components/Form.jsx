import "./Form.css";
import { useState, useEffect } from "react";

const Form = () => {
  const [id, setId] = useState([]);
  const [data, setData] = useState({
    id: "",
    city: "",
    country: "",
    time: "",
    duckQty: 0,
    food: "",
    foodQty: 0,
  });

  // Since each data point falls under an id, this determines what id the next data object should be
  useEffect(() => {
    fetch("http://localhost:8080/data")
      .then((res) => res.json())
      .then((result) => {
        setId(result.length + 1);
      });
  }, []);

  const handleChange = (event) => {
    setData({
      ...data,
      id: id,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(data));
    fetch("http://localhost:8080/data", {
      method: "post",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <section className="formContainer">
      <form onSubmit={handleSubmit}>
        <label htmlFor="city">City</label>
        <br />
        <input
          type="text"
          name="city"
          id="city"
          onChange={handleChange}
          required={true}
        />
        <br />
        <label htmlFor="country">Country</label>
        <br />
        <input
          type="text"
          name="country"
          id="country"
          onChange={handleChange}
          required={true}
        />
        <br />
        <label htmlFor="time">Time</label>
        <br />
        <input
          type="time"
          name="time"
          id="time"
          onChange={handleChange}
          required={true}
        />
        <br />
        <label htmlFor="duckQty">How Many Ducks?</label>
        <br />
        <input
          type="number"
          name="duckQty"
          id="duckQty"
          onChange={handleChange}
          required={true}
        />
        <br />
        <label htmlFor="food">What Kind of Food?</label>
        <br />
        <input
          type="text"
          name="food"
          id="food"
          onChange={handleChange}
          required={true}
        />
        <br />
        <label htmlFor="foodQty">Food Quantity (Approx. In Grams)</label>
        <br />
        <input
          type="number"
          name="foodQty"
          id="foodQty"
          onChange={handleChange}
          required={true}
        />{" "}
        gm.
        <br />
        <input className = "bouncy-button" type="submit" />
      </form>
    </section>
  );
};

export default Form;