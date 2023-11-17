import React, { useState, useEffect } from "react";
import axios from "axios";

const Testimonials = () => {
  const [items, setItems] = useState([]);

  const getAllItems = async () => {
    try {
      const response = await axios.get("http://localhost:5000/testimonials");
      const data = response.data.testimonials;
      console.log(data);
      setItems(data);
    } catch (error) {}
  };

  useEffect(() => {
    getAllItems();
  }, []);

  return (
    <div>
      {items.map((item) => {
        const id = item._id;
        console.log(item.image);
        return (
          <article key={id}>
            <p>{item.name}</p>
            <img src={item.image} alt={item.name} />
          </article>
        );
      })}
    </div>
  );
};

export default Testimonials;
