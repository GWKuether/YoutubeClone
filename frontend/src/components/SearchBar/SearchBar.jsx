import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = (props) => {
  const [searchInput, setSearchInput] = useState("");
  let navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    if (searchInput.length > 0) {
      console.log(searchInput);
      props.getSearchInput(searchInput);
      navigate("/searchresults");
    }
  }

  return (
    <div class="input-group mb-3">
      <input  onChange={handleSearch} value={searchInput}
        type="text"
        class="form-control"
        placeholder="Search"
      />
      <div class="input-group-append">
        <button onClick={handleSubmit} class="btn btn-outline-secondary" type="button">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
