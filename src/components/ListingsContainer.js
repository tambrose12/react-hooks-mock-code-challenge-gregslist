import React, {useState, useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, del}) {
  console.log(listings);
  if (listings == []) {
    return <div></div>;
  }
  const listing = listings.map(listObj => {
    return <ListingCard del={del} key={listObj.id} data={listObj} />
  })

  return (
    <main>
      <ul className="cards">
        {listing}
      </ul>
    </main>
  );
}

export default ListingsContainer;
