export default function randomEnumKey<T>(enumObj: T): keyof typeof enumObj {
  let keys = Object.keys(enumObj);
  let enumKey = keys[
    Math.floor(Math.random() * keys.length)
  ] as keyof typeof enumObj;
  return enumKey;
}
