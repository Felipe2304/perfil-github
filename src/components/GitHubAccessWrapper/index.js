import { AccessGitHubProfile, ButtonAccess } from "./accessStyles"
import mascot from "../../assets/mascot.png"

export const AccessGitHubWrapper = ({dataUser})=>{

  return(
    <AccessGitHubProfile>
      <img src={mascot}></img>
      <ButtonAccess href={dataUser.html_url}>{`Acessar perfil de ${dataUser.name}`}</ButtonAccess>
    </AccessGitHubProfile>
  )
}