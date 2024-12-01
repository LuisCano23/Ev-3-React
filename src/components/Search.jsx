import React, { useEffect, useState } from "react";
import MyCard from "./Card";

const Search = () => {
  //Variables necesarias 
  const [cartas, setCartas] = useState([]);
  const [search, setSearch] = useState("");

  //Api utilizada (link)
  const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?&startdate=2000-01-01&enddate=2002-08-23&dateregion=tcg";

  //Funcion para encapsular la api y asignarla a la variable "cartas"
  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCartas(data.data);
  };

  //useEffect para renderizar la api completa
  useEffect(() => {
    getData();
  }, []);

  //Funcion para que la variable "search" se convierta en lo ingresado en el input
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  
  let results = [];
  if (!search) {
    results = cartas;
  } else {
    results = cartas.filter((carta) =>
      carta.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  return (
    <>
      <input type="text" className="form-control" onChange={handleSearch}/>
      <div className="cardsContainer">
        {results.map((carta) => (
          <MyCard key={carta.id}
            image={carta.card_images[0].image_url_small}
            title={carta.name}
            price={carta.card_prices[0].amazon_price}
          />
        ))}
      </div>
    </>
  );
};

export default Search;