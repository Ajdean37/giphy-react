import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';

const Giphy = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchData() {
      const results = await axios.get('https://api.giphy.com/v1/gifs/trending', {
        params: {
          api_key: "J5eB9q7KY3qvSj8FlLHSdOVYvT16z03q"
        }
      });

      setData(results.data.data);

    }
    fetchData();
  }, []);

  console.log(data);

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const handleSubmit = async (event) => {
      event.preventDefault();
    const results = await axios.get('https://api.giphy.com/v1/gifs/trending', {
      params: {
        api_key: "J5eB9q7KY3qvSj8FlLHSdOVYvT16z03q",
        q: search
      }
    }); 

    setData(results.data.data);
    
  }

  const renderGifs = () => {
    <form>
      <input 
        value={search} 
        onChange={handleSearchChange} 
        type="text" 
        placeholder="search">
      </input>
      <button onClick={handleSubmit} type="submit">Go</button>
    </form>
    return data.map(el => {
      return (
        <div key={el.id} className='gif'>
          <img src={el.images.fixed_height.url}/>
        </div>
      )
    })
  }

  return (
    <div className="container gifs">
      {renderGifs()}
    </div>
  );
}

export default Giphy