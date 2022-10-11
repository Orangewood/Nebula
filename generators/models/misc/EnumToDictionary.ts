export type EnumToDictionary<T extends keyof any, U> = {
  [K in T]: U;
};
