import React, { useState, useEffect } from "react";
import axios from "axios";

const Testimonials = () => {
  const [items, setItems] = useState([]);

  const getAllItems = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/v1/tasks", {
        mode: "cors",
      });

      const data = response.data.tasks;
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
        return <p key={id}>{item.name}</p>;
      })}
    </div>
  );
};

export default Testimonials;
