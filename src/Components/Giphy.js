import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from "./Loading";


const Giphy = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
    async function fetchData() {
        setIsLoading(true)
      const results = await axios.get('https://api.giphy.com/v1/gifs/trending', {
        params: {
          api_key: "J5eB9q7KY3qvSj8FlLHSdOVYvT16z03q"
        }
      });

      setData(results.data.data);

      setIsLoading(false)
    }
    fetchData();
  }, []);

  console.log(data);

  const renderGifs = () => {
      if(isLoading) {
        return (
          <Loading />
        );
      }
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