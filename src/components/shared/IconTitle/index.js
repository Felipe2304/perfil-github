import { IconTitleItem } from "./iconTitleStyles"

export const IconTitle = ({icon , infoText})=>{
  return (
    <IconTitleItem>
      <img src={`${icon}`}></img>
      <span>{infoText}</span>
    </IconTitleItem>
  )
}