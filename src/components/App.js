import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listingArray, setListingArray] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [del, setDel] = useState(-1);
  const [filteredArr, setFilteredArr] = useState([]); //search
  const [searchQ, setSearchQ] = useState(''); //search

  const delFunction = (id) => {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE'
    })
      .then(r => r.json())
      .then(res => {
        setDel(id);
        getData();
      })
  }

  const searchFunction = (filter) => {
    console.log()
    let searchArray = listingArray.filter(listing => {
      return ((listing.location.toLowerCase().includes(filter) || listing.description.toLowerCase().includes(filter)))
    })
    setFilteredArr(searchArray);
  }

  const getData = async () => {
    fetch('http://localhost:6001/listings')
    .then(r => r.json())
    .then(array => {
      setListingArray(array);
      setIsLoaded(true);
    });
  }

  const driver = async () => {
    await getData();
  }
  
  useEffect(async () => {
    await driver();
  }, [])

  return (
    <div className="app">
      <Header search={searchFunction} query={setSearchQ}/>
      <ListingsContainer del={delFunction} listings={(searchQ == '')? listingArray : filteredArr}/>
    </div>
  );
}

export default App;
