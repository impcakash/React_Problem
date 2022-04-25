import React from "react";
import "./CountryDetails.css";
import db from "./db";
import Country from "./Country";
import { useState } from "react";

const RequiredData = () => {
  const [Data, setData] = useState(db);

  const filterItem = (country) => {
    const updatedList = db.filter((currElem) => {
      return currElem.country === country;
    });
    setData(updatedList);
  };

  const lowToHigh = () => {
    var bob = [...db];
    bob.sort((a, b) => a.population - b.population);
    setData(bob);
  };

  const highToLow = () => {
    var mob = [...db];
    mob.sort((a, b) => b.population - a.population);
    setData(mob);
  };

  const allInOne = () => {
    setData(db);
  };

  return (
    <>
      <div>
        <div className="btn">
          <button
            onClick={() => {
              allInOne();
            }}
          >
            All
          </button>

          <button
            onClick={() => {
              lowToHigh();
            }}
          >
            Asc Population
          </button>

          <button
            onClick={() => {
              highToLow();
            }}
          >
            Desc Population
          </button>

          <button onClick={() => filterItem("India")}>India</button>
          <button onClick={() => filterItem("USA")}>USA</button>
          <button onClick={() => filterItem("Japan")}>Japan</button>
          <button onClick={() => filterItem("Australia")}>Australia</button>
          <button onClick={() => filterItem("UK")}>United Kingdom</button>
        </div>

        <Country Data={Data} />
      </div>
    </>
  );
};

export default RequiredData;
