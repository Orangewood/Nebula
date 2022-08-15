export default function NameGenerator(nameList: string[]): string {
  let randomIndex = Math.floor(Math.random() * nameList.length);
  let randomNumber = Math.floor(Math.random() * (5 - 0));
  let randomSuffix = Math.random()
    .toString()
    .slice(2, randomNumber + 1);
  if (randomNumber > 1) {
    return `${nameList[randomIndex]}-${randomSuffix}`;
  }
  return nameList[randomIndex];
}
