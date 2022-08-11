import React from "react";

const FilterData = ({ search, setSearch, data }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {data
        .filter((value) => {
          if (value.first_name.toLowerCase().includes(search.toLowerCase())) {
            return value;
          }
        })
        .map((val, key) => {
          return (
            <div key={key}>
              <img src={val.images} alt="" />
              <p>{val.first_name}</p>
            </div>
          );
        })}
    </div>
  );
};

export default FilterData;
