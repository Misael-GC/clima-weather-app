import React from "react";
import './index.css'
// import { CurrentWeather } from "../CurrentWheather";

export const Search = () => {

    // const { searhValue, setSearchValue } = React.useContext(CurrentWeather)

    const onSearchValueChange = (event) =>{
        console.log(event.target.value);
        // setSearchValue(event.target.value)
    }

  return (
    <div className="container-search">
      <form className="d-flex col-5" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={onSearchValueChange}
        //   value={searhValue}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
