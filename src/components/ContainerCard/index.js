import { ContainerCardBox } from "./containerCardStyles";
import {
  CardProfile,
  CardBio,
  CardAccessProfile,
  CardInfo,
  NotBio,
} from "./containerCardStyles";
import { AccessGitHubWrapper } from "../GitHubAccessWrapper";

import { IconTitle } from "../../components/IconTitle";
import location from "../../assets/location.svg";
import followers from "../../assets/followers.svg";
import following from "../../assets/following.svg";
import company from "../../assets/company.svg";
import repository from "../../assets/repository.svg";

export const ContainerCard = ({ dataUser }) => {
  const objInfo = [
    {
      id: "1",
      icon: `${location}`,
      infoText: dataUser.location ? dataUser.location : "não informado",
    },
    { id: "2", icon: `${followers}`, infoText: dataUser.followers },
    { id: "3", icon: `${following}`, infoText: dataUser.following },
    {
      id: "4",
      icon: `${company}`,
      infoText: dataUser.company ? dataUser.company : "não informado",
    },
    { id: "5", icon: `${repository}`, infoText: dataUser.public_repos },
  ];

  return (
    <ContainerCardBox>
      <CardProfile>
          <img src={`${dataUser.avatar_url}`}></img>
        <div>
          <h4>{dataUser.name}</h4>
          <span>{dataUser.login}</span>
        </div>
      </CardProfile>

      <CardBio>
        {!!dataUser.bio && <p>{dataUser.bio}</p> }
        {!dataUser.bio && <NotBio>{"Bio não informada pelo usuário"}</NotBio>}
      </CardBio>

      <CardAccessProfile>
        <AccessGitHubWrapper dataUser={dataUser} />
      </CardAccessProfile>

      <CardInfo>
        {objInfo.map((info) => {
          return (
            <IconTitle
              key={info.id}
              icon={info.icon}
              dataUser={dataUser}
              infoText={info.infoText}
            />
          );
        })}
      </CardInfo>
    </ContainerCardBox>
  );
};
