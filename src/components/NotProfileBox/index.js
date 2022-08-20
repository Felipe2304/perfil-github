import { NotProfile } from "./notStyles";
import LogoMascot from "../../assets/mascot.png"

export const NotProfileBox = ({infoTextStrong , infoText}) => {
  return (
    <NotProfile>
      <img src={LogoMascot}></img>
      <p><strong>{infoTextStrong}</strong>{infoText}</p>
    </NotProfile>
  )
};
