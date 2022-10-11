export enum Research {
  PHYSICS = "physics",
  CHEMISTRY = "chemistry",
  ASTRONOMY = "astronomy",
  ROBOTICS = "robotics",
  BIOLOGY = "biology",
}

export interface ResearchObj {
  physics?: number;
  chemistry?: number;
  astronomy?: number;
  robotics?: number;
  biology?: number;
}
