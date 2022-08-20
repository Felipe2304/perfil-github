import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    const myProfile = fetch("https://api.github.com/users/Felipe2304");
    myProfile
      .then((response) => response.json())
      .then((json) => setDataUser(json));
  }, []);

  return (
    <div className="container-App">
      
    </div>
  );
}

export default App;
