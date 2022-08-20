import { useEffect, useState } from "react";
import "./App.css";
import {Header} from "./components/Header"
import {ContainerApp} from "./styles"

function App() {
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    const myProfile = fetch("https://api.github.com/users/Felipe2304");
    myProfile
      .then((response) => response.json())
      .then((json) => setDataUser(json));
  }, []);

  return (
    <ContainerApp>
      <Header/>
    </ContainerApp>
  );
}

export default App;
