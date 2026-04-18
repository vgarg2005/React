import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'
import tailwindcss from '@tailwindcss/vite'

function App() {
  const[data, setData] = useState([]);
  
  useEffect(() => {
    // fetch(" https://jsonplaceholder.typicode.com/users ")
    // .then(response=>response.json())
    // .then(json => setData(json))
    // .catch(error=>console.log(error));
    // axios.get("https://jsonplaceholder.typicode.com/users")
    // .then(res=>setData(res.data))
    // .catch(error=>console.log(error))
    async function fetchData() {
      try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        setData(data);
      }
      catch(error) {
        console.log(error)
      }
    }
    fetchData();
  }, [])

  return (
    <div className='App'>
      <h1>Fetch API</h1>
      <ul>
        {data.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  )
}

export default App
