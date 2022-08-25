import { NotProfile } from "./notStyles";
import LogoMascot from "../../assets/mascot.png"

export const NotProfileBox = ({infoTextStrong , infoText}) => {
  return (
    <NotProfile>
      <img src={LogoMascot} alt={"imagem do mascote do github"}></img>
      <p><strong>{infoTextStrong}</strong>{infoText}</p>
    </NotProfile>
  )
};
