import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { ContainerApp, ContainerContent } from "./styles";
import { SearchWrapper } from "./components/SearchWrapper/index";
import { NotProfileBox } from "./components/NotProfileBox/index";

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
      <Header />
      <SearchWrapper />

      <ContainerContent>
        <NotProfileBox />
      </ContainerContent>
    </ContainerApp>
  );
}

export default App;
