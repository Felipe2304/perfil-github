import { useEffect, useState } from "react";
import { GlobalStyle } from "./global";
import { Header } from "./components/Header";
import { ContainerApp, ContainerContent } from "./styles";
import { SearchWrapper } from "./components/SearchWrapper/index";
import { NotProfileBox } from "./components/NotProfileBox/index";
import { ContainerCard } from "./components/ContainerCard/index";

function App() {
  const [dataUser, setDataUser] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    if (!!user.length) {
      const myProfile = fetch(`https://api.github.com/users/${user}`);
      myProfile
        .then((response) => response.json())
        .then((json) => setDataUser(json))
        .catch((error) => setDataUser(error));
    }
  }, [user]);

  const getUserProfile = (userProfile) => {
    setUser(userProfile);
  };

  const messageError = ['Ops! ', 'ocorreu algum erro na busca']
  const messageWelcome = [
    "Seja bem vindo! ",
    "adicione o seu perfil do GitHub.",
  ];

  return (
    <ContainerApp>
      <GlobalStyle />
      <Header />
      <SearchWrapper getUserProfile={getUserProfile} />

      <ContainerContent>
        {dataUser.length === 0 && (
          <NotProfileBox
            infoTextStrong={messageWelcome[0]}
            infoText={messageWelcome[1]}
          />
        )}

        {dataUser.message && (
          <NotProfileBox
            infoTextStrong={messageError[0]}
            infoText={messageError[1]}
          />
        )}

        {dataUser.login && <ContainerCard dataUser={dataUser} />}
      </ContainerContent>
    </ContainerApp>
  );
}

export default App;
