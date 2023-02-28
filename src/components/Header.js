import React from "react";
import Search from "./Search";

function Header({search, query}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search search={search} query={query}/>
    </header>
  );
}

export default Header;
