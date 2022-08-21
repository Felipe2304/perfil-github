import { AccessGitHubProfile, ButtonAccess } from "./accessStyles"
import mascot from "../../assets/mascot.png"

export const AccessGitHubWrapper = ({dataUser})=>{
  return(
    <AccessGitHubProfile>
      <img src={mascot}></img>
      <ButtonAccess>{`Acessar perfil de ${dataUser.name}`}</ButtonAccess>
    </AccessGitHubProfile>
  )
}