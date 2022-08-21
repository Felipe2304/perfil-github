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
      .then((json) => setDataUser(json))
      .catch((error)=> setDataUser(error))
  }, []);

  // const messageError = ['Ops!, ', 'ocorreu algum erro na busca']
  // const messageWelcome = ['Seja bem vindo!, ', 'adicione o seu perfil do GitHub.']

  return (
    <ContainerApp>
      <Header />
      <SearchWrapper />
      <ContainerContent>
        {/* {!dataUser.length && <NotProfileBox infoTextStrong = {messageWelcome[0]} infoText={messageWelcome[1]}/>}
        {!!dataUser.message && <NotProfileBox infoTextStrong = {messageError[0]} infoText={messageError[1]}/>} */}
        <ContainerCard dataUser = {dataUser} />
      </ContainerContent>
    </ContainerApp>
  );
}

export default App;
