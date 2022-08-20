import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { ContainerApp, ContainerContent } from "./styles";
import { SearchWrapper } from "./components/SearchWrapper/index";
// import { NotProfileBox } from "./components/NotProfileBox/index";
import { ContainerCard } from "./components/ContainerCard/index";

function App() {
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    const myProfile = fetch("https://api.github.com/users/Felipe2304");
    myProfile
      .then((response) => response.json())
      .then((json) => setDataUser(json));
  }, []);
  console.log(dataUser);

  return (
    <ContainerApp>
      <Header />
      <SearchWrapper />

      <ContainerContent>
        {/* <NotProfileBox infoTextStrong = {'Ops! '} infoText={'ocorreu algum erro na busca'}/> */}

        <ContainerCard dataUser = {dataUser} />
      </ContainerContent>
    </ContainerApp>
  );
}

export default App;
