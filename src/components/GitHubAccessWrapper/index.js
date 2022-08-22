import { AccessGitHubProfile, ButtonAccess } from "./accessStyles";
import mascot from "../../assets/mascot.png";

export const AccessGitHubWrapper = ({ dataUser }) => {
  return (
    <AccessGitHubProfile>
      <img src={mascot}></img>
      <ButtonAccess href={dataUser.html_url}>
        {dataUser.name
          ? `Acessar pefil de ${dataUser.name}`
          : "Acessar pefil do usuário"}
      </ButtonAccess>
    </AccessGitHubProfile>
  );
};
