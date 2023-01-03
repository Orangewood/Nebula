import React from "react";
import Discovery from "../../../images/resource/Discovery.png";
import Energy from "../../../images/resource/Energy.png";
import Fuel from "../../../images/resource/Fuel.png";
import Life from "../../../images/resource/Life.png";
import Metal from "../../../images/resource/Metal.png";
import Ruins from "../../../images/resource/Ruins.png";
import { Resource } from "../../../models/planets/Planet";
import { ResourceImage, ResourceList } from "./styles";

interface CardResourcesProps {
  resources: Resource[];
}

export default function CardResources(props: CardResourcesProps) {
  const { resources } = props;

  const AssignImage = (currentResource: Resource) => {
    switch (currentResource) {
      case Resource.DISCOVERY:
        return <ResourceImage src={Discovery} />;
      case Resource.ENERGY:
        return <ResourceImage src={Energy} />;
      case Resource.FUEL:
        return <ResourceImage src={Fuel} />;
      case Resource.LIFE:
        return <ResourceImage src={Life} />;
      case Resource.METAL:
        return <ResourceImage src={Metal} />;
      case Resource.RUINS:
        return <ResourceImage src={Ruins} />;
      default:
        break;
    }
  };

  return (
    <ResourceList>
      {resources.map((a) => {
        return AssignImage(a);
      })}
    </ResourceList>
  );
}
