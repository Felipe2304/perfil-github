import { useState } from 'react';
import './App.css';

function App() {

  const [listProfile , setProfile] = useState({});

  const api = 'https://api.github.com/users/Felipe2304'

  const myProfile = ()=>{
    const resultApi = fetch(api)
    resultApi
    .then(response => response.json())
    .then(response => getResult(response) )
    .catch(error => getResult(error))
  }

  const getResult = (response)=>{
    console.log(response)
  }

   myProfile()
  
  return (
    <div className="container-App">
     
    </div>
  );
}

export default App;
