import { ResearchObj } from "../models/actions/research/Research";
import { Lifeform, lifeformList } from "../models/lifeform/Lifeform";

export default function LifeformStats(
  statType: keyof Omit<Lifeform, "lifeformId" | "imgPath" | "description">,
  currentLifeformArray: Lifeform[]
) {
  const flattenArray = currentLifeformArray.flatMap((lifeform) => {
    return [lifeform[statType]].flat(1);
  });

  const wat = flattenArray.map((lifeform) => {
    return lifeform;
  });
  const researchArray = currentLifeformArray.map((lifeform) => {
    return lifeform.research;
  });

  console.log("researchArray", researchArray);

  const reducedData = researchArray.reduce(
    (obj: ResearchObj, val: ResearchObj) => {
      type researchKeyType = keyof ResearchObj;
      for (const researchKey in val) {
        console.log(val);
        if (val[researchKey as researchKeyType]) {
          obj[researchKey as researchKeyType] =
            obj[researchKey as researchKeyType];
        }
      }
      return obj;
    },
    {
      physics: 0,
      chemistry: 0,
      astronomy: 0,
      robotics: 0,
      biology: 0,
    } as ResearchObj
  );

  console.log("reducedData", reducedData);
  return flattenArray;
}

LifeformStats("resources", lifeformList);
