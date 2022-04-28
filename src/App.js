import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';


function App() {
  const [data, setData] = useState([]);
  
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

  const renderGifs = () => {
    return data.map(el => {
      return (
        <div key={el.id} className='gif'>
          <img src={el.images.fixed_height.url}/>
        </div>
      )
    })
  }

  return (
    <div className="container">
      {renderGifs()}
    </div>
  );
}

export default App;
