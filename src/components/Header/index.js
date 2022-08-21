import { HeaderApp, LogoTitle } from "./headerStyles";
import Logo from "../../assets/gitHub.png";

export const Header = () => {
  return (
    <HeaderApp>
      <LogoTitle>
        <h1>gitHub profile</h1>
        <img src={Logo}></img>
      </LogoTitle>
    </HeaderApp>
  );
};
