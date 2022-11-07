import "./styles.css";
import React, { useEffect, useState } from "react";

export default function App() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Kanpur");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=1fe55f27829afc97ea60a0f3b1978686`;
      const response = await fetch(url);
      const resJ = await response.json();
      setCity(resJ);
      console.log(resJ);
    };
    fetchApi();
  }, [search]);
  return (
    <div>
      <div>
        <input
          type="search"
          // value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>

      {!city ? (
        <h1>city not found</h1>
      ) : (
        <div className="main">
          <div className="top">
            <p className="header">City - {search}</p>
            <p className="header">Country - {city.sys.country}</p>
          </div>
          <div className="flex">
            <p className="description">Feels Like - {city.main.feels_like}</p>
            <p className="description">Visibility - {city.visibility}</p>
          </div>
          <div className="flex">
            <p className="temp">Min Temperature - {city.main.temp_min}</p>
            <p className="temp">Max Temperature - {city.main.temp_max}</p>
          </div>
          <div className="flex">
            <p className="temp">Humidity - {city.main.humidity}</p>
            <p className="temp">Wind - {city.wind.speed}</p>
          </div>
        </div>
      )}
    </div>
  );
}
