import React, {useState} from "react";

function Search({search, query}) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    //console.log(e.target.search.value)
    search(e.target.search.value)
  }

  const [valueFill, setValueFill] = useState('');

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={valueFill}
        onChange={(e) => {
          search(e.target.value)
          query(e.target.value)
          setValueFill(e.target.value);
        }}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
