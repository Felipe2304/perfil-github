import { ContainerCardBox } from "./containerCardStyles";
import {
  CardProfile,
  CardBio,
  CardRepo,
  CardInfo,
} from "./containerCardStyles";

import { IconTitle } from "../shared/IconTitle";
import location from "../../assets/location.svg";
import followers from "../../assets/followers.svg";
import following from "../../assets/following.svg";
import company from "../../assets/company.svg";
import repository from "../../assets/repository.svg";
import linkedin from "../../assets/linkedin.png";

export const ContainerCard = ({ dataUser }) => {
  const objInfo = [
    { id: "1", icon: `${location}`, infoText: dataUser.location },
    { id: "2", icon: `${followers}`, infoText: dataUser.followers },
    { id: "3", icon: `${following}`, infoText: dataUser.following },
    {
      id: "4",
      icon: `${company}`,
      infoText: dataUser.company ? dataUser.company : "não contém",
    },
    { id: "5", icon: `${repository}`, infoText: dataUser.public_repos },
    { id: "6", icon: `${linkedin}`, infoText: "" },
  ];
  return (
    <ContainerCardBox>
      <CardProfile>
        <img src={`${dataUser.avatar_url}`}></img>
        <h4>{dataUser.name}</h4>
        <span>{dataUser.login}</span>
      </CardProfile>

      <CardBio>
        <p>{dataUser.bio}</p>
      </CardBio>

      <CardRepo></CardRepo>

      <CardInfo>
        {objInfo.map((info) => {
          return (
            <IconTitle key={info.id} icon={info.icon} dataUser={dataUser} infoText={info.infoText}/>
          );
        })}
      </CardInfo>
    </ContainerCardBox>
  );
};
