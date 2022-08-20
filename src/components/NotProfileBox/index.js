import { NotProfile } from "./notStyles";
import LogoMascot from "../../assets/mascot.png"

export const NotProfileBox = () => {
  return (
    <NotProfile>
      <img src={LogoMascot}></img>
      <p><strong>OPS, </strong>ocorreu algum erro na Busca, digite novamente!</p>
    </NotProfile>
  )
};
