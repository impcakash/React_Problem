import React from "react";
import "./Country.css";

const Country = ({ Data }) => {
  return (
    <>
      <div>
        <br />
        <span className="top"> Id </span>
        <span className="top"> Country </span>
        <span className="top"> City </span>
        <span className="top"> Population </span>
        <button className="btn"></button>
        <button className="btn"></button>
        <hr />

        {Data.map((curr) => {
          return (
            <>
              <div key={curr.id}>
                <br />
                <span> {curr.id} </span>
                <span> {curr.country} </span>
                <span> {curr.city} </span>
                <span> {curr.population} </span>
                <button className="btn">Edit</button>
                <button className="btn">Delete</button>
                <hr />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Country;
