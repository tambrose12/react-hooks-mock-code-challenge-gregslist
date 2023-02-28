import React,{useState} from "react";

// "id": 1,
// "description": "heater",
// "image": "./images/heater.jpg",
// "location": "BROOKLYN"
function ListingCard({del, data:{description="https://via.placeholder.com/300x300", id, image="oops!", location="Kansas"}}) {
  const [favorite, setFavorite] = useState(false);

  const toggleFav = () => {
    setFavorite(!favorite);
    console.log("favorite: ", favorite);
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={toggleFav}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={toggleFav}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={() => del(id)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
