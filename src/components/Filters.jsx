import React, { useState } from "react";
import { data } from "../helper/data";
const Filters = () => {
  const [searchTerm, setSearchTerm] = useState(data);
  //   console.log(data);

  const onSearchChange = (value) => {
    // console.log(value);
    const newData = data.filter((item) => {
      return item.first_name.toLowerCase().includes(value.toLowerCase());
    });
    console.log(newData);
    setSearchTerm(newData);
  };

  const inputStyle = {
    padding: 12,
    width: 500,
    fontSize: 13,
  };
  return (
    <div>
      <header style={{ textAlign: "center" }}>
        <h2>React-App</h2>
        <h4>Build Search Filter in React JS</h4>
      </header>

      <input
        type="search"
        placeholder="Type something to search..."
        style={inputStyle}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      {searchTerm.map((value, index) => {
        return (
          <div
            key={index}
            style={{
              backgroundColor: "#48bb5f",
              paddingBottom: 5,
              textAlign: "center",
            }}
          >
            <p>{`${value.first_name} ${value.last_name}`}</p>
            <p style={{ color: "red" }}>{value.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Filters;
